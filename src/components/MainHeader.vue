<template>
  <header class="main-header">
    <h1>ToDoList</h1>
    <div class="test">
      <span class="sp">Header数字: {{ num }}</span>
      <span class="sp">Header数字: {{ getNum }}</span>
      <span class="sp">nickname: {{ $store.state.users.nickname }}</span>
      <span class="sp">token: {{ $store.state.users.token }}</span>
      <button class="btn info2" @click="xiugai()">修改</button>
      <button class="btn info2" @click="xiugai1()">修改1</button>
    </div>
  </header>
</template>
  
<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'MainHeader',
    computed: {
      // num() {
      //   return this.$store.state.num
      // },
      ...mapState(['num']),
      ...mapGetters(['getNum']),
    },
    methods: {
      xiugai() {
        this.$store.commit('users/xiugai')
      },
      ...mapMutations({
        xiugai1: 'users/xiugai1',
      }),
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'

  .main-header
    text-align: center

    .test
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center

    h1
      margin: 18px
      font-size: 110px
      font-weight: 300
      color: $green
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4)
      transform: translate(0, 0)
</style>