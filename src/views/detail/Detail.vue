<!--
 * @Author: your name
 * @Date: 2020-03-23 16:56:59
 * @LastEditTime: 2020-05-13 11:56:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\Detail.vue
 -->
<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="this.topImages"></detail-swiper>
      <detail-base-info :goods-info="this.goodsInfo"></detail-base-info>
      <detail-shop-info :shop="this.shop"></detail-shop-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetaiNavBar"
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"

  import { getDetail, Goods } from 'network/detail';
  import Scroll from 'components/common/scroll/Scroll';

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        res: {},
        topImages: [],
        goodsInfo: {},
        shop: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid || null;
      this.getDetail(this.iid);
    },
    methods: {
      getDetail(iid) {
        getDetail(iid).then(res => {
          console.log(res);
          const data = res.result;
          this.topImages = data.itemInfo.topImages
          this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
          this.shop = data.shopInfo;
        });
       
      }
    }
  }
</script>

<style scoped>
  .detail {
    height: 100vh;
    /* background-color: #fff; */
    position: relative;
    z-index: 1;
  }
  .content {
    height: calc(100% - 44px);
    background-color: #fff;
  }
</style>