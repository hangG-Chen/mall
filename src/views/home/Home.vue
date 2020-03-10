<!--
 * @Author: your name
 * @Date: 2020-03-01 18:43:57
 * @LastEditTime: 2020-03-10 12:51:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\home\Home.vue
 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <div class="test"></div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from 'components/content/tabControl/TabControl';

  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView.vue';
  import FeatureView from './childComps/FeatureView.vue';
  import { getHomeMultidata, getHomeGoods } from 'network/home';

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return {
        banners: [],
        recommend: [],
        goods:{
          'pop': {page: 0, list: [] },
          'new': {page: 0, list: [] },
          'sell': {page: 0, list: [] },
        }
      }
    },
    created() {
      this.getHomeMultidata();
      
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultidata(){ 
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods('pop', page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
        })
      }
    }
  }
</script>
<style>
#home {
  margin-top: 44px;
  margin-bottom: 49px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.test {
  width: 100%;
  padding: 50px;
  height: 1000px;
  background-color: #3e4;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>