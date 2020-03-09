<!--
 * @Author: your name
 * @Date: 2020-03-05 11:36:43
 * @LastEditTime: 2020-03-06 14:02:09
 * @LastEditors: your name
 * @Description: In User Settings Edit%
 * @FilePath: \mall\src\components\common\swiper\SwiperItem.vue
 -->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Slide',
  }
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0; 
  }
  .slide img {
    width: 100%;
  }
</style>