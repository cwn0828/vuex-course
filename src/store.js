import Vue from 'vue'
import Vuex from 'vuex'
import { state } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  // 专门获取属性的对象
  getters: {
    count: state => state.count,
    // count(state) {
    //   return ++state.count;
    // }
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // completedTodos: function (state) {
    //   return state.todos.filter(function (todo) {
    //     return todo.completed
    //   })
    // }
    // 返回completed为真的对象的个数
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // completedTodosCount: function (state, getters) {
    //   return getters.completedTodos.length;
    // }
    getTodosByID: state => id => state.todos.find(todo => todo.id == id)
    // getTodosByID: function (state) {
    //   (function (id) {
    //     return state.todos.find(function (todo) {
    //       return todo.id == id;
    //     })
    //   })(id)
    // }
  },
  // 修改状态
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  // 同步：一个资源，多个人使用，不会有分发和队列的处理
  // 异步：多个资源，多个人使用，多人可同时执行，注意执行顺序问题
  // 异步调用mutatons（例如：请求数据）
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构
        // const { commit } = context.commit

        // const object = {
        //   name: "cui",
        //   age: 20
        // }
        // const { name, age } = object;
        // context等同于this.$store
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        // context等同于this.$store
        context.commit("decrementCount", payload)
      }, 1000)
    },
    async fetchDataAsync(context) {
      // await(完美异步):接口数据请求完后才会执行下面的代码，防止顺序混乱
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      // console.log(response);
      context.commit("setTodos", response.data)
    }
  }
})