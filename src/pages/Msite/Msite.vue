<template>
	<div class="msite">
		<!-- 首页头部 -->
		<HeaderTop title="昌平区北七家宏福科技园(337省道北)">
			<span class="header_search" slot="search">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_login" slot="login">
				<span class="header_login_text" >登录|注册</span>
			</span>
		</HeaderTop>

		<div class="miste-content-wrapper">
			<div class="miste-content">
				<!--首页导航-->
				<nav class="msite_nav border-1px">
					<!-- Swiper -->
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/1.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/2.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/3.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/4.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/5.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/6.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/7.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/8.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
							</div>
              				<div class="swiper-slide">
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/9.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/10.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/11.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/12.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
                				<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/13.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
               		 			<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/14.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
								<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/1.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
								<a href="javascript:" class="link_to_food">
									<div class="food_container">
										<img src="./images/nav/2.jpg">
									</div>
									<span>甜品饮品</span>
								</a>
							</div>
						</div>
						<!-- 如果需要分页器 -->
						<div class="swiper-pagination"></div>
					</div>
					<img src="./images/msite_back.svg">
				</nav>

				<!--首页附近商家-->
				<div class="msite_shop_list border-1px">
					<div class="shop_header">
						<i class="iconfont icon-xuanxiang"></i>
						<span class="shop_header_title">附近商家</span>
					</div>
					<ShopList/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
	// 引入组件
    import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'
    export default {
        name: 'Msite',
        components:{HeaderTop, ShopList},
        mounted() {
			// 创建一个Swiper实例对象, 来实现轮播
			new Swiper('.swiper-container', {
				// 配置对象
				loop: true, // 可以循环轮播
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
			})
        },
    }
</script>

<style lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height: 100%
    .miste-content-wrapper  //头部
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
    .msite_nav    // 导航
      bottom-border-1px(#e4e4e4)
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px



</style>