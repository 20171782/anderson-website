<template>
 <div class="">
   <div class="header-holder tt-logo-center ">
     <div class="about   testStep header-holder tt-logo-center" >
       <video loop muted playsinline uk-video="autoplay: inview" style="width: 2500px">
         <source src="@/assets/cen.mp4" type="video/mp4" ></video>
     </div>
   </div>
     <br><br>
   <event/>
 </div>
</template>
<script>
  import event from '@/components/Anderson.vue'
  export default {
components:{
  event
}
  }

</script>
<style scoped>

  .header-holder.tt-logo-center {
      background-image: linear-gradient(to bottom, #00695C,#004D40 84%);
      -pie-background: linear-gradient(to bottom, #00695C, #004D40 84%);
  }
  video{
    max-height: 500px;
      width: 2000px!important;


  }

</style>
