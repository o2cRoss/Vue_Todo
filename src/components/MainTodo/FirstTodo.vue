<template>
  <div class="first-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to to?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in todoData"
      :key="index"
      :todo="item"
      @del="handleDelItem"
    ></todo-item>
    <todo-info></todo-info>
  </div>
</template>
<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'
  let id = 0
  export default {
    name: 'FirstTodo',
    data() {
      return {
        todoData: [],
        content: '',
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          complated: false,
        })
        this.content = ''
      },
      handleDelItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((item) => item.id === id),
          1
        )
      },
    },
    components: {
      TodoItem,
      TodoInfo,
    },
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .first-todo
    margin: 0 auto
    width: 800px
    background-color: #fff
    box-shadow: 0 0 15px #666

    .add-todo
      font-size: 24px
      font-weight: inherit
      font-family: inherit
      color: inherit
      border: none
      outline: none
      width: 100%
      height: 70px
      padding: 12px 12px 12px 36px
      box-sizing: border-box
</style>