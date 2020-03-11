

<!--
 * @Author: your name
 * @Date: 2020-03-10 12:55:50
 * @LastEditTime: 2020-03-11 14:11:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\content\goods\GoodsList.vue
 -->
<template>
  <div class="goods">
    <goods-list-item 
    v-for="(item, index) in goods" 
    :key='index' 
    :goodsItem='item'>
    </goods-list-item> 
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem';
  
  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    padding: 2px;
  }
</style>