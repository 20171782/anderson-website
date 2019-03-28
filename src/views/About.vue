<template>
  <div class="about">
    <!--<h1>This is an about page</h1>-->
    <img src="@/assets/footer.jpg" alt="">
    <event/>
  </div>
</template>
<script>
  import event from '@/components/frames/event.vue'
  export default {
components:{
  event
}
  }

</script>
<style scoped>
  img{
    max-height: 400px;
    width: 100%;
  }
</style>
