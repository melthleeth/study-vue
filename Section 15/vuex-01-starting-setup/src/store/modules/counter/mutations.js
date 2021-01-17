export default {
  increment(state) {
    state.counter += 2;
  },
  increase(state, payload) {
    console.log(state); // local state이기 때문에 auth 관련은 찾아볼 수 없음
    state.counter = state.counter + payload.value;
  }
};
