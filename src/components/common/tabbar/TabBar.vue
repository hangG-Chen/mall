<!--
 * @Author: your name
 * @Date: 2020-03-01 17:12:32
 * @LastEditTime: 2020-03-06 15:47:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\tabbar\TabBar.vue
 -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
 #tab-bar {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow:  0 -3px 5px rgba(111, 111, 111, .1)
  }
</style>