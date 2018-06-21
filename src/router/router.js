import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/choose')), 'choose')
    }, {
        path: '/home',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/final',
        component: r => require.ensure([], () => r(require('../page/final')), 'final')
    }]
}]