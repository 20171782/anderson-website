<template>
   <div class="header-holder tt-logo-center ">
       <nav class="uk-container nav-wrapper header-holder tt-logo-center ">
           <div class="nav-wrapper black header-holder tt-logo-center">
               <img  class="animated fadeIn uk-grid-margin" src="log.png" alt="" style="width: 70px">
               <ul id="nav-mobile" class="right hide-on-med-and-down">
                   <li class="uk-active" ><router-link to="/"><a href="" uk-icon="icon: home" style="color:goldenrod ;" ></a></router-link></a></li>
                   <li class="uk-active"><router-link to="/gallery"><span>GALLERY</span></router-link></li>
                   <li class="uk-active"><router-link to="/about"><span>ABOUT</span></router-link></li>
                   <li class="uk-active"><router-link to="/contact"><span>CONTACT</span></router-link></li>
                   <li class="uk-active"><router-link to="/events"><span>EVENTS</span></router-link></li>
               </ul>
           </div>
       </nav>
   </div>



</template>


<script>

  export default {
    component:{

    }
  }
</script>

<style scoped>
/*  .nav-page{*/
/*      background-color: rgba(0,0,0, 0.4);*/
/*    padding-left: 400px;*/
/*      width: 1500px;*/
/*      !*padding-top: 0px;*!*/
/*  }*/

/*  a:hover{*/
/*    color: #1976D2 !important;*/
/*    font-weight: 1000;*/
/*    font-size: 12pt !important;*/
/*  }*/
/*  .uk-navbar-nav > li > sa{*/
/*    text-transform: none;*/
/*  }*/

/*  .sticky {*/
/*      position: fixed;*/
/*      top: 0;*/
/*      width: 100%;*/
/*  }*/

/*span*/
/*{*/
/*    color: goldenrod;*/
/*}*/
/*    img{*/
/*        height: 90px;*/
/*        max-height: 50px;*/
/*    }*/
/*.first{*/
/*    max-height: 100px;*/

.header-holder.tt-logo-center {
    background-image: linear-gradient(to bottom, #1E6F92, #013558 84%);
    -pie-background: linear-gradient(to bottom, #1E6F92, #013558 84%);
}
</style>
