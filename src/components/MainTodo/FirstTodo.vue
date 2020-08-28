<template>
  <div class="first-todo">
    <input type="text" class="add-todo" placeholder="what to to?" autofocus />
  </div>
</template>
<script>
  export default {
    name: 'FirstTodo',
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .first-todo
    margin: 0 auto
    width: 600px
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
      padding: 12px 12px 12px 36px
      box-sizing: border-box
</style>