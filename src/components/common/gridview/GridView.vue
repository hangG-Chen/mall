<!--
 * @Author: your name
 * @Date: 2020-03-11 11:39:16
 * @LastEditTime: 2020-03-11 13:07:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit    
 * @FilePath: \mall\src\components\common\gridview\GridView.vue
 -->
<template>
  <div class="grid-view" ref="gridView">

  </div>
</template>

<script>
  export default {
    name: "GridView",
    props: {
      cols: {
        type: Number,
        default: 2
      },
      vMargin: {
        type: Number,
        default: 8
      },
      hMargin: {
        type: Number,
        default: 8
      },
      cols: {
        type: Number,
        default: 2
      },
      cols: {
        type: Number,
        default: 2
      },
    },
    mounted: {
      
    },
    methods: {
      _autoLayout() {
        let gridEl = this.$refs.gridView;
        let children = gridEl.children;
        console.log(gridEl)
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

        let itemWidth = gridEl.clientWidth
      }
    }
  }
</script>

<style scoped>

</style>