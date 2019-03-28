<template>
    <div style="border-top:3px solid darkgreen;padding-bottom: 100px">
        <div class="uk-container uk-container-small">
            <h2 style="padding-top: 20px" class="uk-heading-line uk-text-center">Antonio Anderson</h2>
            <hr>
            <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
                <div class="uk-position-relative uk-light" uk-slideshow>

                    <ul class="uk-slideshow-items">
                        <li>
                            <img src="@/assets/andy3.png" alt="">
                        </li>
                        <li>
                            <img src="@/assets/download.jpg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/preach.jpg" alt="">
                        </li>
                    </ul>
                    <hr>
                    <div class="uk-position-bottom-center uk-position-small">
                        <ul class="uk-dotnav">
                            <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                            <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                            <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
                        </ul>
                    </div>

                </div>
                <div>
                    <button style='width: 10px' class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-example">
                        <span>
                            Anthonio A. Anderson Sr. is a native of the beautiful
                            island of Jamaica, who until last year resided in Florida, USA.
                        </span>

                        <br> <button style="padding-left: 10px" class="uk-button uk-button-primary uk-button-small">Read More</button></button>
                         <div id="modal-example" uk-modal>
                        <div class="uk-modal-dialog uk-modal-body">
                            <h2 class="uk-modal-title">Antonio Anderson</h2>
                            <img class="sticky" src="@/assets/andy3.png" alt="">
                            <p>
                                Anthonio A. Anderson Sr. is a native of the beautiful
                                island of Jamaica, who until last year resided in Florida, USA.
                                He is from the parish of Kingston, even though he is often
                                quoted as saying, “I am from central Jamaica,” having lived in St. Catherine, Clarendon, and
                                Manchester at different stages of his life.
                            </p>
                            <p>
                                Coming from humble beginnings God has bless Anthonio in many ways and has opened the door
                                for him to excel academically. He pursued an education at the illustrious Northern Caribbean
                                University (formerly West Indies College) in 1997. By August 2001 he graduated from Northern
                                Caribbean University with a Bachelor’s of Science (B.Sc.) in Computer Information Science,
                                with a minor in Business Administration. In 2006 he attended Nova Southeastern University
                                where he completed a double master in Computer Information Technology and Bio-Medical
                                Informatics. He is recently completed an MBA with Walden University because he needed to
                                provide stability for his business. Currently, he is pursuing his Doctorate in Technology
                                Management with a specialization in Strategic Leadership and Change Management at Colorado
                                Technical University. He is a strong believer in the continued pursuit of knowledge.
                            </p>
                            <p>
                                He is married to Michaela and is raising two lovely children, who are currently in school in
                                Florida. He and his wife are dedicated to spreading the gospel, and sharing their experiences of
                                God’s redeeming love and grace with others.  Anthonio was very active in youth ministry and
                                functioned in the capacity of a master guide and a counselor at Maranatha SDA Church in
                                Miami, Florida. He now worships at Plantation SDA in Plantation, Florida where, even though
                                he is in Jamaica he is still active in Men&#39;s Ministry, Worship Ministry and Entrepreneurship. He
                                is the lead evangelist for a A3 Evangelism Ministry, which ministers to people all over the world
                                through e-ministry.
                            </p>
                            <p>
                                His passion and commitment is to continue evangelizing and lives by his guiding philosophies
                                which are, “I can do all things through Christ which strengthens me” (Philippians 4:13) and
                                “You are only limited by your mind.” His favorite scripture is Galatians 6:2 which states,
                                <span style="color: blue">“Bear one another’s burdens, and so fulfill the law of Christ”</span>
                            </p>
                            <p class="uk-text-right">
                                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                                <button class="uk-button uk-button-primary" type="button">Save</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Anderson"
    }
</script>

<style scoped>
    div
    {
        background-color: black;

    }
    img:hover {
        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.5s;

        /* When the animation is finished, start again */
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
    }
    img {
        border-radius: 50%;
        width: 250px;

    }
    p
    {
        color: goldenrod;
    }
    h2
    {
        color: white;
    }
    span
    {
        color: white;
    }
    img.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        width: 200px;
    }
</style>
