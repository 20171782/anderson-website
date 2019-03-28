<template>
    <div class="uk-text-center">
        <div class="uk-container">
            <div class="uk-card uk-card-default uk-card-body">
                <h1 class="uk-card-title">LOGIN</h1>
                <input type="text" v-model="name"/><br><br>
                <p style="color: red"  v-if="feedback">{{feedback}}</p>
                <button @click="addevent"  class="uk-button uk-button-primary">login</button>
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
                }else{
                    this.feedback='Please enter your name to proceed, must be more the 5 characters'
                }
            }
        }

    }
</script>

<style scoped>

</style>
