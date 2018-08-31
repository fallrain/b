<template>
  <div>
    <h1>this is new</h1>
  </div>
</template>
<script>
  export default {
    /*props: {
      name: {
        type: String,
        default: '这是姓名'
      }
    },*/
    props: ['name', 'items', 'count'],
    created() {
    },
    data() {
      return {
        msg: 'hello word'
      }
    },
    methods: {
      add() {
        this.$emit('up');
      }
    }
  }
</script>
<style>

</style>
