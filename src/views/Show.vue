<template>
  <div>
    <p v-text="getById(id)"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'show',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters([
      'getById'
    ])
  },
}
</script>

<style>

</style>