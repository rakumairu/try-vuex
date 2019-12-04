<template>
  <div>
    <hr>
    <p>
    <strong>ID</strong>: {{ id }}
    Name: {{ name }}
    Done: {{ done }}
    </p>
    <u @click="show(id)" style="border-style: solid; border-radius: 10px; padding-right:3px; padding-left:3px;">Show</u> 
    <u @click="$emit('onDelete', id)" style="border-style: solid; border-radius: 10px; padding-right:3px; padding-left:3px;">Delete</u>
  </div>
</template>

<script>
export default {
  name: 'todo',
  props: ['id', 'name', 'done'],
  methods: {
    show(id) {
      this.$router.push({
        name: 'show',
        params: {
          id: id
        }
      })
    }
  },
}
</script>