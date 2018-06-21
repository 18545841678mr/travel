<template>
	<div class="choose">
		<div class="title">旅行线路规划</div>
			<div class="input">
				请输入你要去的城市：<input ref="input" class="city" name="请输入你要去的城市" title="请输入你要去的城市" cols="30" rows="10"></input>
				<div class="submit" title="提交" @click="submit">提交</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'choose',
	// computed: {
	// 	city:() => {
	// 		return this.$refs.input.value;
	// 	}
	// },
	mounted(){
		// console.log(this.$refs.input);
		// console.log("11111"+this.$refs.input.value);
	},
	methods: {
		submit: function(){
			console.log(this.$refs.input.value);
		}
	}  
}

</script>

<style lang="less">
    *{
		padding: 0;
		margin: 0;
	}
	.choose .title{
		text-align: center;
		font-size: 38px;
		background-color: pink;
		height: 120px;
		line-height: 120px;
	}
	.choose .input{
		height: 60px;
		font-size: 38px;
		line-height: 60px;
		position: relative;
		/*display: flex;*/
		margin-top: 200px;
		left: 50%;
		margin-left: -500px;
	}
	.choose .input .city{
		width: 520px;
		height: 40px;
	    padding: 9px 7px;
	    font: 30px arial;
	    border: 5px solid #000;
	    border-bottom: 1px solid #ccc;
	    border-right: 0;
	    vertical-align: top;
	    outline: none;
	    box-shadow: none;
	}
	.choose .input .submit{
		display: inline-block;
		margin-left: 15px;
		width: 100px;
		height: 50px;
		font-size: 28px;
		line-height: 50px;
		background-color: purple;
		text-align: center;
		border-radius: 10px;
	}
</style>
