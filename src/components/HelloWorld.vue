<template>
  <div class="hello">
    <button type="button" @click="jump">跳转</button>
    <h1>{{ msg }}</h1>
    <h2>Essential Links11111111111111111111111111111111</h2>
    <test name="张" :items="items" :count="num" @up="num++" @click.native="change">
      <span style="border:1px solid;" slot="header">header</span>
      <span style="border:1px solid;" slot="footer">footer</span>
    </test>
    <h1 v-show="show">显示隐藏</h1>
  </div>
</template>

<script>
  import Test from '@/components/Test'

  export default {
    name: 'HelloWorld',
    components: {
      Test
    },
    created() {
      console.log(this.name1);
    },
    data() {
      return {
        show: true,
        num: 1,
        msg: 'Welcome to Your Vue.js App',
        items: [
          {
            message: '0'
          },
          {
            message: '1'
          },
          {
            message: '2'
          },
          {
            message: '3'
          }
        ]
      }
    },
    methods: {
      jump() {
        this.$router.push({
          name: 'Test'
        });
      },
      change() {
        this.show = !this.show;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $color: red;
  h1, h2 {
    color: $color;
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
