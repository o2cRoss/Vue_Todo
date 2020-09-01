<template>
  <div :class="['todo-item', {'complated' : todo.complated}]">
    <!-- {}号内容也可以使用 不加大括号{},直接用todo.complated?'complated': '' -->
    <input type="checkbox" v-model="todo.complated" />
    <label for>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    methods: {
      delItem() {
        this.$emit('del', this.todo.id)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-item
    display: flex
    justify-content: space-between
    align-items: center
    padding: 10px
    font-size: 24px
    border-top: 1px solid rgba($green, 0.1)

    &:hover
      button:after
        content: 'x'
        font-size: 24px
        color: $green

    &.complated
      label
        color: #d9d9d9
        text-decoration: line-through

    input
      width: 50px
      height: 30px
      cleanDefaultStyle()

      &:checked
        cursor: pointer

      &:after
        content: url('~images/unchecked.svg')

      &:checked:after
        content: url('~images/checked.svg')

    label
      flex: 2
      transition: color 1.2s

    button
      width: 40px
      height: 30px
      background-color: transparent
      cleanDefaultStyle()
      cursor: pointer
</style>