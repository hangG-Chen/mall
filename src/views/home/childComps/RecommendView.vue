<!--
 * @Author: your name
 * @Date: 2020-03-07 15:48:50
 * @LastEditTime: 2020-03-09 13:14:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\home\childComps\RecommendView.vue
 -->
 <template>
   <div class="recommend">  
     <div v-for="(item, index) in recommend" class="recommend-item" :key="index">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <div>{{item.title}}</div>
       </a>
     </div>
   </div>
 </template>
 
 <script>
   export default {
     name: 'RecommendView',
     props: {
       recommend: {
         type: Array,
         default() {
           return []
         }
       }
     }
   }
 </script>
 
 <style scoped>
  .recommend {
    display: flex; 
    width: 100%;
    text-align: center;  
    font-size: 12px;
    padding: 15px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 7px;
  } 
 </style>
