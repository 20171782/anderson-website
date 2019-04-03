<template>
    <div>

<!--        <br>-->
        <videos></videos>
        <br><br>
        <event/>
        <br><br>
        <andy/>
        <views></views>
<!--        <gallery/>-->
        <br><br>
        <foot/>
        <router-view/>
    </div>
</template>


<script>

    import videos from '@/components/frames/backgroundVideo.vue'
    import cards from '@/components/frames/cards.vue'
    import event from '@/components/frames/event.vue'
    import andy from '@/components/Anderson.vue'
    import gallery from '@/components/gallery.vue'
    import foot from '@/components/parts/footer.vue'
    import views  from '@/views/viewEvents'


    export default {
        components:{

            videos,
            cards,
            event,
            andy,
            gallery,
            foot,
            views

        },

    data(){
        return{

        }
    }
    }
</script>
<style scoped>
    span
    {
        color: goldenrod;
    }
</style>
