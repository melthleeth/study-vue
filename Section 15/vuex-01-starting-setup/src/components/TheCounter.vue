<template>
    <h3>{{ finalCounter }}</h3> <!-- $store.state.counter -->
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
    // counter() {
    // //   return this.$store.state.counter * 2;
    //     return this.$store.getters.finalCounter;
    // }
    ...mapGetters('numbers', ['finalCounter'])
  },
}
</script>