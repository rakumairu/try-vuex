<template>
  <div>
    <h1>Create Todo</h1>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" v-model="name">
      <select v-model="done">
        <option value="true">Selesai</option>
        <option value="false">Tidak Selesai</option>
      </select>
      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'create',
  data() {
    return {
      name: '',
      done: false
    }
  },
  methods: {
    onSubmit() {
      const self = this
      const todo = {
        id: this.lastId.id + 1,
        name: this.name,
        done: this.done
      }
      // this.add(todo) //It's the same as dispatch because we already map the actions
      this.$store.dispatch('add', todo)
      .then((response) => {
        if (response === 'success') {
          if (confirm('Data berhasil ditambahkan\nLihat daftar data?')) {
            this.$router.push({
              name: 'todos'
            })
          } else {
            self.name = '',
            self.done = false
          }
        }
      })
      .catch(error => console.log(error))
    },
    /**
     * Used if we want to access the name directly
     */
    ...mapActions([
      'add'
    ])
  },
  computed: {
    ...mapGetters([
      'lastId'
    ])
  }
}
</script>

<style>

</style>