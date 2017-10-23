<template>
	<div>
		<button @click="activate">Increment +1</button>
		<button @click="deactivate">Decrement +1</button>
	</div>
</template>

<script>


export default {
	methods: {
		activate () {
			this.$store.commit('INCREMENT')
		},

		deactivate() {
			this.$store.commit('DECREMENT')
		}
	},

	}
</script>

<style>
	
</style>

