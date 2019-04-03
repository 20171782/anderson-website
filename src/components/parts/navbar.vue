<template>
   <div  class="">
       <nav>
           <div class="nav-wrapper white uk-text-center">
               <img src="@/assets/download.jpg" alt="" style="width: 65px">
           </div>
       </nav>
       <div uk-sticky="bottom: #offset"  class="header-holder tt-logo-center first transbox">
           <nav class="uk-container nav-wrapper header-holder tt-logo-center ">
               <div class="nav-wrapper black header-holder tt-logo-center navbar">

                   <ul id="nav-mobile" class="right hide-on-med-and-down">
                       <li class="uk-active" ><router-link to="/"><a href="" uk-icon="icon: home" style="" ></a></router-link></a></li>
                       <li class="uk-active"><router-link to="/gallery"><span>GALLERY</span></router-link></li>
                       <li class="uk-active"><router-link to="/about"><span>ABOUT</span></router-link></li>
                       <li class="uk-active"><router-link to="/contact"><span>CONTACT</span></router-link></li>
                       <li class="uk-active"><router-link to="/event"><span>EVENTS</span></router-link></li>
                       <li>
                           <a href="#">Our Programmes <span uk-icon="chevron-down"></span></a>
                           <div class="uk-navbar-dropdown" uk-dropdown="offset: 0">
                               <ul class="uk-nav uk-navbar-dropdown-nav">
                                   <li><router-link to="/new">Post prayer</router-link></li>
                                   <li><router-link to="/event">Prayer Wall</router-link></li>
                                   <li><router-link to="/user">User page</router-link></li>
                               </ul>
                           </div>
                       </li>

                   </ul>
               </div>
           </nav>
       </div>
   </div>



</template>


<script>

  export default {
    component:{

    }
  }
</script>

<style scoped>
    div.transbox {

        opacity: 0.8;

    }



.header-holder.tt-logo-center {
    background-image: linear-gradient(to bottom, #013558 84%);
    /*-pie-background: linear-gradient(to bottom, #1E6F92, #013558 84%);*/

}
    .first{
        max-height: 90px!important;
    }

    .main{
        position:fixed;
    }
</style>
