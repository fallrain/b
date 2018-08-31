<template>
  <div>
    <slot name="header"></slot>
    <h1 :class="{ blue: isActive }">this is test</h1>
    <span>{{name}}</span>
    <ul>
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <input type="text" v-model="count">
    <button type="button" @click="changeColer">增加</button>
    <slot name="footer"></slot>
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
        isActive: false,
        msg: 'hello word'
      }
    },
    methods: {
      changeColer() {
        this.isActive = true
      },
      add() {
        this.$emit('up');
      }
    }
  }
</script>
<style>
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
