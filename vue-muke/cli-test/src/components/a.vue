<template>
	<div>
		{{ hello }} - {{dataA}}
		<button @click="emitMyEvent">$emit</button>
		number: {{number}}
	</div>
</template>

<script type="text/ecmascript-6">
export default {
//	props: ["dataA","number"],
	props: {
		dataA: {},
		number: {
			type: [Number, String]
		}
	},
	data(){
		return {
			hello: 'I am component a',
			key: this.key,
			name: this.name
		}
	},
	methods: {
		emitMyEvent(){
			this.$emit('my-event', this.hello);
		}
	}
}

</script>

<!-- add 'scoped' attribute to limit css to this component only -->
<style lang="scss" scoped>
	button {
		height: 40px;
		width: 100px;}
</style>