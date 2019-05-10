<template>
   <div>
       <div  class="uk-text-center first">
           <br>
           <div class="uk-container uk-container-small" style="padding-top: 50px">
               <div class="uk-card ">
                   <h1 class="uk-card-title">LOGIN</h1>
                   <input type="text" v-model="name"/><br><br>
                   <p style="color: red"  v-if="feedback">{{feedback}}</p>
                   <button @click="addevent"  class="uk-button uk-button-primary">login</button>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "userPage",
        data(){
            return{
                name:null,
                feedback:''
            }
        },
        methods:{
            addevent(){
                if(this.name.length>5){
                    this.$router.push({name:"viewEvents",params:{name:this.name}})
                    this.feedback=''
                }else{
                    this.feedback='Please enter your name to proceed, must be more the 5 characters'
                }
            }
        }

    }
</script>

<style scoped>
first{
    max-width :20%;
    background-image: linear-gradient(to bottom, #00695C,#004D40 84%);
    -pie-background: linear-gradient(to bottom, #00695C, #004D40 84%);

}
</style>
