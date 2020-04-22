<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="fixed" 
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"></tab-control>
    <scroll class="home-wrap" 
        ref="homescroll"
        :probe-type="3"
        :pull-up-load="true"
        @scroll="contentScroll"
        @pullingUp="loadMore">
      <div>
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control ref="tabControl2"
                    :titles="['流行', '新款', '精选']"
                    @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods" ></goods-list>
      </div>
    </scroll>
    <back-top class="backtop" @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from 'components/content/tabControl/TabControl';
  import Scroll from "components/common/scroll/Scroll"
  import BackTop from 'components/content/backTop/BackTop';

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView.vue';
  import FeatureView from './childComps/FeatureView.vue';
  import GoodsList from 'components/content/goods/GoodsList.vue';

  import { getHomeMultidata, getHomeGoods } from 'network/home';

  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BackTop
    },
    data(){
      return {
        banners: [],
        recommend: [],
        goods:{
          'pop': {page: 0, list: [] },
          'new': {page: 0, list: [] },
          'sell': {page: 0, list: [] },
        },
        currentType: 'pop',
        isBackTopShow: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      //获取首页数据
      this.getHomeMultidata();
      //获取商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
 
      
    },
    mounted() {
      //获取最新better-scroll滚动条的高度
      const refresh = this.debounce(this.$refs.homescroll.refresh, 50)
      this.$bus.$on("itemImgLoad", () => {
        refresh()
      });
      
    },
    activated() {
      this.$refs.homescroll.refresh();
      this.$refs.homescroll.scrollTo(0, this.saveY, 0);
      
    },
    deactivated() {
      this.saveY = this.$refs.homescroll.scroll ? this.$refs.homescroll.scroll.y : 0;
    },
    methods: {
      /**
       * 事件监听相关
       */
      tabClick(i) {
        switch(i){
          case 0:  
            this.currentType = "pop";
            break
          case 1:  
            this.currentType = "new";
            break
          case 2:  
            this.currentType = "sell";
            break
        };
        this.$refs.tabControl1.currentIndex = i;
        this.$refs.tabControl2.currentIndex = i;
      },
      backClick() {
        this.$refs.homescroll.scrollTo(0, 0, 500);
        
      },
      contentScroll(position) {
        //判断BackTop是否显示
        this.isBackTopShow = -position.y > 1000;
        this.isTabFixed = -position.y > this.tabOffsetTop;
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
      },
      swiperImgLoad() {
        //获取tabControl的offsetTop
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;      
      },
      //防抖函数
      debounce(func, delay) {
        let timer = null;
        return function(...args) {
          if(timer) clearTimeout(timer);
          
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
      
      /**
       * 网络请求相关
       */
      getHomeMultidata() { 
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
          this.$refs.homescroll.finishPullUp();
        })
      },

    },
    
    
    
  }
</script>
<style scoped>
#home {
  height: 100vh;
  /* position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9
}
.fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
.home-wrap{
  box-sizing: content-box;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.backtop {
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 10;
 }
</style>