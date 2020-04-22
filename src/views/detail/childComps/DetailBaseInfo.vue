<!--
 * @Author: your name
 * @Date: 2020-04-10 13:49:28
 * @LastEditTime: 2020-04-13 18:51:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComps\DetailBaseInfo.vue
 -->
<template>
  <div v-if="Object.keys(goodsInfo).length!== 0">
    
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>