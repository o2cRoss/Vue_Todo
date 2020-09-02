<template>
  <div>
    <main-header></main-header>
    <first-todo></first-todo>

    <div>
      <h1>app组件</h1>
      <router-link to="/account">account</router-link>
      <router-link to="/goodslist">goodslist</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'
  import FirstTodo from './components/MainTodo/FirstTodo.vue'

  export default {
    name: 'App',
    components: {
      //组件名：组件对象
      MainHeader: MainHeader,
      FirstTodo,
    },
    // data() {
    //   return {
    //     todoData: ['todo1', 'todo2', 'todo3'],
    //     content: '',
    //   }
    // },
    // methods: {
    //   addTodo() {
    //     if (this.content === '') return
    //     this.todoData.push(this.content)
    //     this.content = ''
    //   },
    // },
    // created(){
    //     // console.log(img);
    // }
  }
</script>

<style lang="stylus" scoped></style>