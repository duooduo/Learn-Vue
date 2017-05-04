<template>
	<div>
		{{ hello }} - {{dataA}}
	</div>
</template>

<script type="text/ecmascript-6">
export default {
	props: ["dataA"],
	data(){
		return {
			hello: 'I am component a',
			key: this.key,
			name: this.name
		}
	}
}

</script>

<!-- add 'scoped' attribute to limit css to this component only -->
<style lang="scss" scoped>

</style>