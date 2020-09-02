<template>
  <div class="todo-info">
    <span class="totals">{{total}} item left</span>
    <div class="tabs">
      <a
        v-for="(item, index) in staties"
        :key="index"
        :class="{actived:item == active}"
        @click="toggleState(item)"
      >{{item}}</a>
    </div>
    <button class="btn info" @click="clearComplated">Clear Complated</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    data() {
      return {
        staties: ['all', 'active', 'complated'],
        active: 'all',
      }
    },
    props: {
      total: Number,
    },
    methods: {
      toggleState(item) {
        this.active = item
        this.$emit('toggleState', item)
      },
      clearComplated() {
        this.$emit('clearComplated')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 18px
    font-weight: 500
    line-height: 40px
    padding: 10px
    border-top: 3px solid rgba($green, 0.1)

    .totals
      color: $green

    .tabs
      // 也可以在tabs下使用flex布局
      a
        primaryBorderBtn()
        box-shadow: 0 0 2px #666
        margin-right: 10px

        &.actived
          primaryBtn()

        &:hover
          background-color: $lightred
          color: #fff

        &:active
          background-color: $lightgreen
          color: #fff

    .btn.info
      InfoBtn()
      font-size: inherit
      // border: 1px solid rgba(0, 0, 0, 0.5)
      box-shadow: 0 0 2px #666
</style>