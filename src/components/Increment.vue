<template>
	<div>
		<button @click="activate">Increment +1</button>
		<button @click="deactivate">Decrement +1</button>

		<h2>my count is {{ test }}</h2>
	</div>
</template>

<script>

import store from '../vuex/store.js'

export default {
	methods: {
		activate () {
			store.commit('INCREMENT')
		},

		deactivate() {
			store.commit('DECREMENT')
		}
	},

	computed: {
		test () {
			return store.state.counter
		}
	}
}
</script>

<style>
	
</style>