<template>
    <div  class="me" style="padding-top:50px ">
        <div class="icon-bar" style="padding-left: 90px">
            <social></social>
        </div>
        <div class="uk-container  first" >
            <div class="">
                <div class="">
                    <h1 class="uk-card-title uk-text-center" style="color: white;padding-top: 20px">Post Your Prayer</h1>
                    <form @submit.prevent="addevent"></form>
                    <label for="name">name</label>
                    <input type="text" v-model="name"/>
                    <label for="title">concern</label>
                    <input type="text" v-model="concern"/>
<!--                    <label for="time">time</label>-->
<!--                    <input type="text" v-model="time"/><br><br>-->
                    <label for="location">location</label>
                    <input type="text" v-model="location"/><br>
                    <label for="Theme">prayer</label>
                    <input type="text" v-model="theme"/>
                    <p style="color:red" class="uk-text-center" v-if="enter">{{enter}}</p>
                    <button @click="addevent"  class="uk-button uk-button-primary uk-align-center">Post</button>
                    <br>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import db from '@/firebase/init.js'
    import social from '@/components/frames/socialMedia.vue'
    export default {
        name: "newEvent",
        props:['name'],
        components:{
            social
        },

        data(){
            return{
                name:'',
                time:'',
                theme:'',
                concern:'',
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
                        concern:this.concern,
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
    max-width:40%;
    background-image: linear-gradient(to bottom, #00695C,#004D40 84%);
    -pie-background: linear-gradient(to bottom, #00695C, #004D40 84%);

}
   .header-holder.tt-logo-center {


   }
   .icon-bar {
       position: fixed;
       top: 50%;
       -webkit-transform: translateY(-50%);
       -ms-transform: translateY(-50%);
       transform: translateY(-50%);
   }

   .icon-bar a {
       display: block;
       text-align: center;
       padding: 16px;
       transition: all 0.3s ease;
       color: white;
       font-size: 20px;
   }

   .icon-bar a:hover {
       background-color: #000;
   }

   .facebook {
       background: #3B5998;
       color: white;
   }

   .twitter {
       background: #55ACEE;
       color: white;
   }

   .google {
       background: #dd4b39;
       color: white;
   }

   .linkedin {
       background: #007bb5;
       color: white;
   }

   .youtube {
       background: #bb0000;
       color: white;
   }

   .content {
       margin-left: 75px;
       font-size: 30px;
   }
</style>
