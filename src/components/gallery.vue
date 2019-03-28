<template>
    <div style="padding-bottom: 10px;border-top: 3px solid darkgreen">
        <div class="header">
            <h1 style="color: darkgreen">View Gallery</h1>
        </div>
        <div class="row">
            <div class="row">
                <div class="column">
                    <img :src="image" alt="Snow" style="">
                </div>
                <div class="column">
                    <img src="@/assets/andy3.png" alt="Forest" style="">
                </div>

            </div><div class="column">
                    <img src="@/assets/footer.jpg" alt="Mountains" style="width:200%">

                <div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div><div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div><div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div><div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div><div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div><div class="column">
                    <img src="@/assets/andy3.png" alt="Mountains" style="width:100%">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "gallery",
        data(){
            return{
                image:'view.jpg'
            }
        }

    }
</script>

<style scoped>

    .header {
        text-align: center;
        padding: 32px;
    }
    * {
        box-sizing: border-box;
    }

    .column {
        float: left;
        /*width: 55.33%;*/
        padding: 5px;
    }

    /* Clearfix (clear floats) */
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
    @media (max-width: 800px) {
        .column {
            flex: 50%;
            max-width: 60%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media (max-width: 600px) {
        .column {
            flex: 100%;
            max-width: 100%;
        }
    }
    div
    {
        background-color: goldenrod;
    }
</style>
