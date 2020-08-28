<template>
  <header class="main-header">
    <h1>ToDoList</h1>
  </header>
</template>
  
<script>
  export default {
    name: 'MainHeader',
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .main-header
    text-align: center

    h1
      margin: 20px
      font-size: 110px
      font-weight: 300
      color: $green
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4)
      transform: translate(0, 0)
</style>