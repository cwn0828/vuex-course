// 模块化：管理todos状态
const state = {
    todos: [
        { id: 1, title: "todo item 1", completed: false },
        { id: 2, title: "todo item 2", completed: true },
        { id: 3, title: "todo item 3", completed: true },
    ]
};
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosByID: state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos: (state, todos) => state.todos = todos
};
const actions = {
    async fetchDataAsync(context) {
        // async和await(完美异步):接口数据请求完后才会执行下面的代码，防止顺序混乱
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        // console.log(response);
        context.commit("setTodos", response.data)
    }
};

export default {
    state, getters, mutations, actions
}