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
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDelItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearComplated="handleClearComplated"
    ></todo-info>
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
        total: 0,
        filter: 'all',
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
      handleToggleState(item) {
        this.filter = item
      },
      handleClearComplated() {
        //方法1删除源数组数据
        // for (let i = 0; i < this.todoData.length; i++) {
        //   let index = this.todoData.findIndex((item) => item.complated === true)
        //   if (index != -1) {
        //     this.todoData.splice(index, 1)
        //   }
        // }
        //方法2过滤重新赋值
        this.todoData = this.todoData.filter((item) => item.complated === false)
      },
    },
    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.complated == false
          ).length
        },
      },
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case 'active':
            return this.todoData.filter((item) => item.complated == false)
            break
          case 'complated':
            return this.todoData.filter((item) => item.complated == true)
            break
          default:
            return this.todoData
            break
        }
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