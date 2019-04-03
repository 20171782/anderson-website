<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <br><br>
    <foot></foot>
  </div>
</template>


<script>
  import navbar from '@/components/parts/navbar.vue'
  import foot from '@/components/parts/footer.vue'
  export default {
    components:{
      navbar,
      foot
    }
  }
</script>

<style>


</style>
