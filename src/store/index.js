import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      {
        id: 1,
        name: 'Demas',
        done: false
      },
      {
        id: 2,
        name: 'Pira',
        done: false
      },
      {
        id: 3,
        name: 'Aulia',
        done: false
      },
      {
        id: 4,
        name: 'Demaspira',
        done: true
      },
      {
        id: 5,
        name: 'Aulia',
        done: true
      },
    ]
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push(payload)
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    resetTodos(state) {
      state.todos = []
    }
  },
  actions: {
    add({ commit }, todo) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('addTodo', todo)
          resolve('success')
        }, 1000)
      })
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    lastId: state => {
      return state.todos[state.todos.length - 1]
    },
    getById: state => id => {
      return state.todos.filter(todo => todo.id === id)
    }
  }
})
