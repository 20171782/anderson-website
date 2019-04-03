<template>
    <div class="testStep header-holder tt-logo-center "  >
        <div style="">
            <div class="uk-container uk-container-small" >
                <div style="padding-left: 0;">
                    <div class="uk-position-relative uk-visible-toggle" tabindex="-1" uk-slideshow="animation: push; ratio: 16:9;" style="padding-left: 0;">

                        <ul class="uk-slideshow-items">
                            <li>
                                <img src="footer.jpg" alt="" uk-cover>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                                    <h3 class="uk-margin-remove">Overlay Bottom</h3>
                                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li>
                                <img src="@/assets/preach.jpg" alt="" uk-cover>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
                                    <h3 class="uk-margin-remove">Overlay Bottom</h3>
                                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>
                            <li>
                                <img src="view.jpg" alt="" uk-cover>
                                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
                                    <h3 class="uk-margin-remove">Overlay Bottom</h3>
                                    <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </li>

                        </ul>

                        <div class="uk-light">
                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "carousel"
    }
</script>

<style scoped>
    .testStep{
        background-image: url();
    }
    .header-holder.tt-logo-center {
        background-image: linear-gradient(to bottom, #1E6F92, #013558 84%);
        -pie-background: linear-gradient(to bottom, #1E6F92, #013558 84%);
    }
</style>
