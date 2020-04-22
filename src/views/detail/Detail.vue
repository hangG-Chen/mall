<!--
 * @Author: your name
 * @Date: 2020-03-23 16:56:59
 * @LastEditTime: 2020-04-13 18:22:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\Detail.vue
 -->
<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="this.topImages"></detail-swiper>
    <detail-base-info :goods-info="this.goodsInfo"></detail-base-info>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetaiNavBar"
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo"

  import { getDetail, Goods } from 'network/detail';

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data() {
      return {
        iid: null,
        res: {},
        topImages: [],
        goodsInfo: {}
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
          this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        });
       
      }
    }
  }
</script>

<style scoped>

</style>