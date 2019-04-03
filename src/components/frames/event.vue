<template>
    <div class=" ">
<!--        <h2 style="padding-top: 20px;color: #013558" class="uk-heading-line uk-text-center ">Events</h2><hr>-->
        <div class="uk-container uk-container-small">
            <div class="uk-child-width-1-3@s uk-grid-match" uk-grid>
                <div v-for="event in events" :key="event.id" class="">
                    <div>
                        <div class="uk-card uk-card-body header-holder tt-logo-center" >
                            <h3>{{event.title}}</h3><br>
                            <span>Speaker:   {{event.speaker}}</span><br>
                            <hr>
                            <span>Location: {{event.location}}</span><br>
                            <hr>
                            <span>Time: {{event.time}}</span><br>
                            <hr>
<!--                            <span>Theme: {{event.theme}}</span><br>-->
<!--                            <hr>-->
<!--                            <span>Date: {{event.date}}</span><br><br>-->
                            <button class="uk-button uk-button-primary uk-button-small">View Event</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "event",

        data() {
            return {
                events:[
                    {title:"Come and be saved",
                        speaker:'Antonio Anderson',
                        location:'Albion ',
                        time:'6:00pm',
                        theme:'Christ for today and Tomorrow',
                        date:'September 05, 2019',
                        id:'1223'
                    },
                    {title:"Final Events",
                        speaker:'Antonio Anderson',
                        location:'Albion Seventh Day Adventist',
                        time:'6:00pm',
                        theme:'Christ for today and Tomorrow',
                        date:'September 05, 2019',
                        id:'1224'
                    },
                    {title:"The Promise",
                        speaker:'Antonio Anderson',
                        location:'Albion Seventh Day Adventist',
                        time:'6:00pm',
                        theme:'Christ for today and Tomorrow',
                        date:'September 05, 2019',
                        id:'1225'
                    },

                ]
            }
        }
    }
</script>

<style scoped>
    .header-holder.tt-logo-center {
        background-image: linear-gradient(to bottom, #1E6F92, #013558 84%);
        -pie-background: linear-gradient(to bottom, #1E6F92, #013558 84%);
    }
    span,h3{
        color: white;
    }

</style>
