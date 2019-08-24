import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

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
    count: state => ++state.count,
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
  mutations: {

  },
  actions: {

  }
})