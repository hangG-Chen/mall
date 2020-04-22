
<!--
 * @Author: your name
 * @Date: 2020-03-13 18:18:08
 * @LastEditTime: 2020-03-23 16:00:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\scroll\Scroll.vue
 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: 'Scroll',
    data(){
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      click: {
        type: Boolean,
        default: true
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: true,
        // pullDownRefresh: true,
        click: true,

      });
      
      
      this.scroll.on("pullingUp",el => {
        this.$emit("pullingUp");
      });
      // this.scroll.on("pullingDown",el => {
      //   console.log("下拉刷新");
      // });
      if(this.probeType == 2 || this.probeType == 3){
        this.scroll.on("scroll",position => {
          this.$emit("scroll", position)
        });
      }
      if(this.pullUpLoad) {
        this.scroll.on("pullingUp",() => {
          this.$emit("pullingUp");
        })
      }
      
    },
    methods: {
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      },
      // getScrollY() {
      //   return this.scroll ? this.scroll.y : 0
      // }
    },
    
  }
</script>

<style scoped>
  .wrapper {
    /* background-color: red; */
    /* overflow: hidden; */
    /* overflow-y: scroll;  */
  }
</style>