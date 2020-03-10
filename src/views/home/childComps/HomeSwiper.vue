<!--
 * @Author: your name
 * @Date: 2020-03-06 17:10:32
 * @LastEditTime: 2020-03-09 14:50:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\home\childComps\HomeSwiper.vue
 -->
<template>
  <div id="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { SwiperItem,Swiper } from 'components/common/swiper';
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  
</style>