<template>
  <div id="app">
    <!-- getters -->
    <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosByID(3)}}</p>
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
// {} 解构
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Count
  },
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosByID"
  ])
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosByID() {
  //     return this.$store.getters.getTodosByID;
  //   }
  // }
  // 写法3
  // computed: mapState(["count", "todos"])
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
