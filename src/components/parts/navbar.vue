<template>

<div style="background-color: rgba(0,0,0, 0.4);" class="first">
    <div class=" " uk-sticky="top:0px;">
        <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div class="uk-position-relative">
                <div class="nav-page">
                     <div class="uk-navbar-center">
                         <div class="sticky">
                             <div class="">
                                <ul class="uk-navbar-nav">
                                    <li class="uk-active" ><router-link to="/"><a href="" uk-icon="icon: home" style="color:goldenrod ;" ></a></router-link></a></li>
                                    <li class="uk-active"><router-link to="/gallery"><span>GALLERY</span></router-link></li>
                                    <li class="uk-active"><router-link to="/about"><span>ABOUT</span></router-link></li>
                                    <img  class="animated fadeIn" src="logo.png" alt="" style="width: 150px">
                                    <li class="uk-active"><router-link to="/contact"><span>CONTACT</span></router-link></li>
                                    <li class="uk-active"><router-link to="/events"><span>EVENTS</span></router-link></li>
                                </ul>
                             </div>
                         </div>
                     </div>
                </div>
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
  .nav-page{
      background-color: rgba(0,0,0, 0.4);
    padding-left: 400px;
      width: 1500px;
      /*padding-top: 0px;*/
  }

  a:hover{
    color: #1976D2 !important;
    font-weight: 1000;
    font-size: 12pt !important;
  }
  .uk-navbar-nav > li > sa{
    text-transform: none;
  }

  .sticky {
      position: fixed;
      top: 0;
      width: 100%;
  }

span
{
    color: goldenrod;
}
    img{
        height: 90px;
        max-height: 50px;
    }
.first{
    max-height: 100px;
}
</style>
