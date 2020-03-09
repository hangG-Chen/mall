<!--
 * @Author: your name
 * @Date: 2020-03-01 18:43:57
 * @LastEditTime: 2020-03-09 13:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\home\Home.vue
 -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="left"></div>
      <div slot="center">购物街</div>
      <div slot="right"></div>
    </nav-bar>
    <home-swiper :banners='banners'/>
    <recommend-view :recommend='recommend'></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from './childComps/HomeSwiper';
  import RecommendView from './childComps/RecommendView.vue';
  import FeatureView from './childComps/FeatureView.vue';
  import { getHomeMultidata } from 'network/home';

  
  
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        console.log(this.recommend);
      })
    }
  }
</script>
<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>