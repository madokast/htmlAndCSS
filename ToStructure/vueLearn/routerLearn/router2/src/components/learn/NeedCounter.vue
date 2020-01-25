<template>
  <div>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    name: "NeedCounter",
    props:{
      // counter:Number
    },
    computed:{
      counter(){
        return this.$store.state.counter;
      }
    }
  }
</script>

<style scoped>

</style>
