<template>
  <div>
    <p>Jumlah: {{ doneTodosCount }}</p>
    <Todo 
      v-for="(todo, index) in todos"
      :key="index"
      @onDelete="deleteTodo"
      v-bind="todo"
    />
  </div>
</template>

<script>
import Todo from '../components/Todo'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'todos',
  components: {
    Todo
  },
  methods: {
    deleteTodo(id) {
      this.$store.commit('deleteTodo', id)
    }
  },
  computed: {
    ...mapGetters([
      'doneTodosCount'
    ]),
    ...mapState([
      'todos'
    ])
  }
}
</script>

<style>

</style>