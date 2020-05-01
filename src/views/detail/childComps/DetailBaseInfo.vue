<!--
 * @Author: your name
 * @Date: 2020-04-10 13:49:28
 * @LastEditTime: 2020-05-01 17:33:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComps\DetailBaseInfo.vue
 -->
<template>
  <div v-if="Object.keys(goodsInfo).length!== 0">
    <div class="info-title">{{goodsInfo.desc}}</div>
    <div class="info-price">
      <div class="n-price">{{goodsInfo.price}}</div>
      <div class="o-price">{{goodsInfo.oldPrice}}</div>
    </div>
    <div class="info-other">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" 
        v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" alt="">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
</style>