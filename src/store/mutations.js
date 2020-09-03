export default {
  increment(state, payload = 1) {
    //state.num += payload ? payload : 1
    state.num += payload
  },
  decrement(state, payload = 1) {
    state.num -= payload
  }
}