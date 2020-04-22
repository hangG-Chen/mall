
<!--
 * @Author: your name
 * @Date: 2020-03-26 13:33:00
 * @LastEditTime: 2020-03-31 16:22:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComps\DetailSwiper.vue
 -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key=index>
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
  import { Swiper,SwiperItem } from 'components/common/swiper';
  export default {
    name: "DetailSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {
      
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>