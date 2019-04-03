<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>


<script>
  import navbar from '@/components/parts/navbar.vue'
  export default {
    components:{
      navbar,
    }
  }
</script>

<style>


</style>
