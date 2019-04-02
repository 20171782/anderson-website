<template>
    <div class="first">
            <div class="">
                <div  style="" v-for="event in events" :key="name" class="uk-child-width-1-3@s uk-grid-match" uk-grid>
                    <div>
                    <div class="uk-card uk-card-default uk-card-body">
                        <h3 class="uk-card-title">{{event.title}}</h3>
                                <ul>
                                    <li>
                                        <span uk-icon="user"> SPEAKER: {{event.name}}</span>
                                        <span uk-icon="image">  THEME: {{event.theme}}</span>
                                        <span uk-icon="clock"> TIME: {{event.time}}</span>
                                        <span uk-icon="location"> Location: {{event.location}}</span>
                                    </li>
                                </ul>
                             </div>

                        </div>
                </div>
            </div>

        </div>

</template>

<script>
    import db from '@/firebase/init.js'
    import moment from 'moment'
    export default {
        name: "viewEvents",

        props:['name'],
        components:{

        },
        data(){
            return{
                events:[]
            }
        },
        created(){
            let ref = db.collection('events').orderBy('name').onSnapshot(snapshot=>{
                snapshot.docChanges().forEach(change=>{
                    if(change.type=='added'){
                        let docs = change.doc
                        this.events.push({
                            name:docs.data().name,
                            title:docs.data().title,
                            theme:docs.data().theme,
                            location:docs.data().location,
                            time:moment(docs.data().time).format('lll')
                        })

                    }
                })
            }).catch(function(error) {
                console.log("Error getting documents: ", error);
            });
console.log(ref)
        }

    }
</script>

<style scoped>
input{height: 90px;
}
    li span{
        /*display: block;*/
    }
    ul{
        list-style-type: none;
    }
    span{
        margin: 9px;
        padding-left: 5px;
    }
    .first{overflow: auto;max-height: 500px}

</style>
