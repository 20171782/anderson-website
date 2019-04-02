<template>
    <div>
        <navbar></navbar>
        <div class="uk-container uk-container-small first" style="padding-top:50px ">
            <div class="">
                <div class="">
                    <h1 class="uk-card-title uk-text-center">Post Your Events</h1>
                    <form @submit.prevent="addevent"></form>
                    <label for="name">name</label>
                    <input type="text" v-model="name"/>
                    <label for="title">title</label>
                    <input type="text" v-model="title"/>
                    <label for="Theme">theme</label>
                    <input type="text" v-model="theme"/>
                    <label for="time">time</label>
                    <input type="text" v-model="time"/><br><br>
                    <label for="location">location</label>
                    <input type="text" v-model="location"/><br><br>
                    <button @click="addevent"  class="uk-button uk-button-primary">login</button>
                </div>
                <p style="color:red" v-if="enter">{{enter}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init.js'
    import navbar from '@/components/parts/navbar.vue'
    export default {
        name: "newEvent",
        props:['name'],
        components:{
            navbar,
        },

        data(){
            return{
                name:'',
                time:'',
                theme:'',
                title:'',
                location:'',
                enter:null
            }
        },
        methods:{
            addevent(){
                if(this.name){
                    this.$router.push({name:"viewEvents",params:{name:this.name}});
                    db.collection("events").add({
                       name:this.name,
                        time:Date.now(),
                        theme:this.theme,
                        title:this.title,
                        location:this.location
                    }).catch(function(error) {
                        console.error("Error adding document: ", error);
                    }).then(alert('Your event has been Posted'));
                    this.$router.push({name:"viewEvents",params:{name:this.name}})

                }else{
                    this.enter='Enter an event to continue'
                }

            }
        }
    }
</script>

<style scoped>
   template {
        background: #1B5E20;
    }
.first{
    max-width:40%
}
</style>
