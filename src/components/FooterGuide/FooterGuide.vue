<template>
    <footer class="footer_guide border-1px">
        <div class="guide_item" :class="{on: '/msite' === $route.path}" @click="goto('/msite')" >
            <span class="item_icon">
                <i class="iconfont icon-waimai"></i>
            </span>
            <span>首页</span>
        </div>
        <div class="guide_item" :class="{on: '/search' === $route.path}" @click="goto('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </div>
        <div class="guide_item" :class="{on: '/order' === $route.path}" @click="goto('/order')">
            <span class="item_icon">
                <i class="iconfont icon-dingdan"></i>
            </span>
            <span>订单</span>
        </div>
        <div class="guide_item" :class="{on: '/profile' === $route.path}" @click="goto('/profile')" >
            <span class="item_icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>我的</span>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterGuide',
				methods: {
					goto(path) {
						this.$router.replace(path);
						// router.push(location)想要导航到不同的URL，则使用router.push方法。这个方法会向history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的URL。
					}
				}
    }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>