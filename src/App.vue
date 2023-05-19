<template>
	<div id="shop">
		<router-view/>
		<FooterGuide v-show="$route.meta.showFooter" />
	</div>
</template>

<script>
	// 引入FooterGuide组件
	import FooterGuide from './components/FooterGuide/FooterGuide.vue'
	export default {
		name: 'App',
		// 注册组件
		components: {FooterGuide},
		mounted() {
			console.log(this);
		},
	}
</script>

<style lang="stylus">
  #shop
    width 100%
    height 100%
    position relative
</style>
