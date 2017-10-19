<template>
	<div>
		<h1>Count is {{ counter }}</h1>
	</div>
</template>

<script>

import store from '../vuex/store.js'

export default {
	computed: {
	    counter () {
	      return store.state.counter
	    }
	  }
}
	
</script>

<style>
	
</style>