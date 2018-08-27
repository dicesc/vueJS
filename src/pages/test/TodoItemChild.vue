<template>
  <div >
    <li @click="clickDelete">{{content}}</li>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['content', 'index'],
  methods: {
    clickDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
