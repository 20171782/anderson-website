<template>
 <div>
   <div class="header-holder tt-logo-center">
     <div class="about uk-container uk-container-medium testStep header-holder tt-logo-center" >
       <video loop muted playsinline uk-video="autoplay: inview" style="width: 2500px">
         <source src="@/assets/cen.mp4" type="video/mp4" ></video>
     </div>
   </div>
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
  .header-holder.tt-logo-center {
    background-image: linear-gradient(to bottom, #1E6F92, #013558 84%);
    -pie-background: linear-gradient(to bottom, #1E6F92, #013558 84%);

  }
  video{
    max-height: 400px;

  }
</style>
