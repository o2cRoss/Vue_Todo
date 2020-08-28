<template>
  <div>
    <main-header></main-header>
  </div>
</template>


<script>
  import './assets/styles/global.styl'
  import MainHeader from './components/MainHeader.vue'

  export default {
    name: 'App',
    components: {
      //组件名：组件对象
      MainHeader: MainHeader,
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