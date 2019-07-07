<template>
  <div class="home">
      <button @click="addClick()">增加</button>
  </div>
</template>

<script>
export default {
    mounted() {

    },

    methods: {
       addClick(){
        this.$store.dispatch('incrementA', 3)
      }
    },

    computed: {
      count() {
        return this.$store.state.count
      }

    }
}
</script>
