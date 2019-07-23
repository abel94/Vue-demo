<template>
  <div>
    {{ count }}
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";
import { mapState } from 'vuex'

export default {
  async mounted() {
    console.log(this.$store.state.count);
  },

  components: {
    Home
  },

  computed: mapState( ['count'] )
};
</script>
