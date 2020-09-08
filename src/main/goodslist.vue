<template>
  <div>
    {{ $store.state.num }}
    <!-- 方式1 不推荐 -->
    <!-- <button @click="$store.state.num++">点击加1</button> -->

    <button class="btn info2" @click="addOne">点击加1</button>
    <button class="btn info2" @click="$store.dispatch('decrementAsync')">点击减1</button>

    <button class="btn info2" @click="increment()">点击加1</button>
    <button class="btn info2" @click="decrementAsync()">点击减1</button>
  </div>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'
  export default {
    methods: {
      addOne() {
        this.$store.commit('increment')
      },
      ...mapMutations(['increment']),
      ...mapActions(['decrementAsync']),
    },
  }
</script>

<style lang="stylus" scoped></style>  