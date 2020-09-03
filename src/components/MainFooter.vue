<template>
  <div class="main-footer">
    <span class="sp">Footer数字：{{ $store.getters.getNum }}</span>
  </div>
</template>

<script>
  export default {
    name: 'MainFooter',
  }
</script>

<style lang="stylus" scoped>
  .main-footer
    text-align: center
</style>