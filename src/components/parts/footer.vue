<template>
    <div id="TamplateBase" style="border-to: 500px;border-top:3px solid darkgreen">
        <div class="uk-container uk-container-small uk-padding">
            <div class="uk-child-width-1-3" uk-grid>
                <div>
                    <h4 class="uk-heading-bullet text-style">Prayer Request</h4>
                    <forms></forms>
                </div>
                    <div>
                        <h4 class="uk-heading-bullet text-style">Useful Links</h4>
                        <ul class="uk-list text-style">
                            <li>Telephone: 1 (876) 963-7191/ 963-7804</li>
                            <li>Location: Manchester Rd. Mandeville Manchester </li>
                            <li> <img src="@/assets/download.jpg" alt="" style="padding-top: 1px"></li>
                        </ul>
                    </div>
                <div>
                    <social/>
                </div>

             </div>
        </div>
    </div>
</template>

<script>
    import forms from '@/components/frames/form.vue'
    import social from '@/components/frames/socialMedia.vue'

    export default {
        name: "footer",
        components:
            {
                forms,
                social
            }
    }

</script>

<style scoped>
#TamplateBase
{
    /*background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7d1fnUVx7S9UTxcov8L1y0_O23UNk_3WZyl6SVj-uExrRTtx8Ew);*/
    /*background-repeat: no-repeat;*/
    /*background-size: 1500px 700px;*/
}
    li,h4{
        color: darkgreen;
    }
    div{
        border-top:darkgreen;
    }
</style>
