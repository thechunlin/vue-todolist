import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    count: 0,
    header: 'TodoList',
    todo: [{ status: false, text: '看電視', date: '' }]
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
    addTodo (state, data) {
      state.todo.push({ status: false, text: data.todo, date: data.date })
    },
    deleteTodo (state) {
      state.todo.splice(state, 1)
    },
    finishTodo (state, index) {
      state.todo[index].status = !state.todo[index].status
    }
  },
  getters: {
    tododata (state) {
      return state.todo
    },
    statedata (state) {
      return state
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
})
