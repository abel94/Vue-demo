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
  mounted() {
    console.log(this.$store.state.count);
  },

  components: {
    Home
  },

  computed: mapState( ['count'] )
};
</script>
