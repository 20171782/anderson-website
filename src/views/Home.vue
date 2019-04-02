<template>
    <div>
        <navbar></navbar>
<!--        <br>-->
        <videos></videos>
        <br>
        <event/>
        <andy/>
<!--        <gallery/>-->

        <foot/>
        <router-view/>
    </div>
</template>


<script>
    import navbar from '@/components/parts/navbar.vue'
    import videos from '@/components/frames/backgroundVideo.vue'
    import cards from '@/components/frames/cards.vue'
    import event from '@/components/frames/event.vue'
    import andy from '@/components/Anderson.vue'
    import gallery from '@/components/gallery.vue'
    import foot from '@/components/parts/footer.vue'

    export default {
        components:{
            navbar,
            videos,
            cards,
            event,
            andy,
            gallery,
            foot

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
