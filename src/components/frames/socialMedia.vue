<template>
    <div>
        <h4 class="uk-heading-bullet text-style">Social Media</h4>
        <div  class="uk-child-width-1-1 text-style" uk-grid >
            <a href="https://www.facebook.com/ncueducation/" target="_blank" class="uk-icon-button  uk-margin-small-right" uk-icon="facebook" style="color: #3b5998;"></a>
            <a href="https://twitter.com/ncueducation" target="_blank" class="uk-icon-button uk-margin-small-right" uk-icon="twitter" style="color: #00aced;"></a>
            <a href="https://plus.google.com/106251138258617752932" target="_blank" class="uk-icon-button" uk-icon="google-plus" style="color: #dd4b39;"></a>
            <a href="https://www.youtube.com/channel/UCaAlpTlb1Qk-S-UVGKtijKg" target="_blank" class="uk-icon-button" uk-icon="youtube" style="color: #bb0000;"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "socialMedia"
    }
</script>

<style scoped>
a{
    background-color: rgba(0,0,0, 0.4);
    background-color: #013558;
}
    h4
    {
        color: white;
    }
    a:hover{
        /*background-color: rgba(0,0,0, 0.4),*/
        /*background-color: white;*/
    }

</style>
