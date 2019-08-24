<template>
  <div id="app">
    <!-- getters -->
    <!-- <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosByID(3)}}</p>-->
    <!-- mutations -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCount">+</button>
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./components/Count";
// {} 解构
import { mapState, mapGetters, mapMutations } from "vuex";
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
  ]),
  methods: mapMutations(["incrementCount", "decrementCount"])
  // methods: {
  //   increment() {
  //     // 调用mutations 里的 incrementCount
  //     this.$store.commit("incrementCount");
  //   },
  //   decrement(n) {
  //     // 调用mutations 里的 decrementCount
  //     this.$store.commit("decrementCount", n);
  //   }
  // }
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
