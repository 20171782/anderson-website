<template>
    <div class="uk-text-center">
        <div class="">
            <div class="uk-inline">
                <h1 class="uk-card-title">Post Your Events</h1>
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
</template>

<script>
    import db from '@/firebase/init.js'
    export default {
        name: "newEvent",
        props:['name'],
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
   input{
       /*display: block;*/

   }

</style>
