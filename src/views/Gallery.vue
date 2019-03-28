<template>
   <div>
       <div class="header" id="myHeader">
           <h1>Image Grid</h1>
           <p>Click on the buttons to change the grid view.</p>

       </div>

       <!-- Photo Grid -->
       <div class="row">
           <div class="column">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="">
               <img src="@/assets/logo.jpg" style="

">
           </div>

       </div>
   </div>
</template>

<script>
    export default {
        name: "Gallery"
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    .header {
        text-align: center;
        padding: 32px;
    }

    .row {
        display: -ms-flexbox; /* IE 10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE 10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create two equal columns that sits next to each other */
    .column {
        -ms-flex: 50%; /* IE 10 */
        flex: 50%;
        padding: 0 4px;
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
    }

    /* Style the buttons */
    .btn {
        border: none;
        outline: none;
        padding: 10px 16px;
        background-color: #f1f1f1;
        cursor: pointer;
        font-size: 18px;
    }

    .btn:hover {
        background-color: #ddd;
    }

    .btn.active {
        background-color: #666;
        color: white;
    }
</style>
