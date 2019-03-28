<template>
    <div>
        <div class="uk-inline">
            <div class="carStyle" >

                <section id="myVideo">
                    <video autoplay playsinline loop muted ref="video" style="width: 1500px">
                        <source src='@/assets/cen.mp4'  type="video/mp4">
                    </video>
                    <slot></slot>
                </section>

            </div>
        </div>



    </div>
</template>

<script>
    export default {
        data(){
            return{
                source:"https://quirksmode.org/html5/videos/big_buck_bunny.mp4"
            }
        }
    }

</script>

<style scoped>

    #myVideo {
        right: 0;
        bottom: 0;



        margin: 0 auto;
    }

p,h3
{
    color:goldenrod;
}
    section {

        width: 100%;
        max-height: 400px;

    }
</style>

