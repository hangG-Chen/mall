
<!--
 * @Author: your name
 * @Date: 2020-03-09 15:09:03
 * @LastEditTime: 2020-03-10 01:40:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\tabControl\TabControl.vue
 -->
<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles"
    :key="index" 
    @click="itemClick(index)"
    :class="{active: index === currentIndex }"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex : 0
      }
    },
    methods: {
      itemClick(i) {
        this.currentIndex = i
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
    line-height: 15px;
    padding: 10px;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span { 
    border-bottom: 3px solid var(--color-high-text);
  }
</style>