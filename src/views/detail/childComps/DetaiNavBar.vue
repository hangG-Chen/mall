import NavBar from 'components/common/navbar/NavBar';
<!--
 * @Author: your name
 * @Date: 2020-03-24 14:23:09
 * @LastEditTime: 2020-03-25 15:34:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComps\DetaiNavBar.vue
 -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
        :key="index"
         class="title-item" 
         :class="{active : index === currentIndex}"
         @click="itemClick(index)">{{item}}</div>
      </div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(i) {
        this.currentIndex = i;
      },
      backClick() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    justify-content: center;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .back img {
    margin-top: 12px;
  }
</style>