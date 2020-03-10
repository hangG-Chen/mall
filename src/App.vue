<!--
 * @Author: your name
 * @Date: 2020-02-26 18:19:02
 * @LastEditTime: 2020-03-09 14:42:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\App.vue
 -->
<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
