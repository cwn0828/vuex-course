<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>App.vue:{{todos}}</p>
    <Count />
  </div>
</template>

<script>
import Count from "./components/Count";
// {} 解构
import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  // 写法3
  computed: mapState(["count", "todos"])
  // computed:{
  //   // ... 范围解析符
  //   ...mapState(["count", "todos"]),
  //   others(){
  //   }
  // }
  // 写法2
  // computed: mapState({
  //   // count: function(state) {
  //   //   return state.count;
  //   // },
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
