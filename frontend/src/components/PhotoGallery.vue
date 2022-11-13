<template>
    <div id="photoGallerySection" class="photosContainer">
        <p class="photosTitle">Photo Gallary</p>
        <div class="photoBox">
            <div class="photoRow">
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Dandelions.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Portrait.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Drawing.png" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Biking3.jpg" />
                </div>
            </div>
            <div class="photoRow">
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Ping-pong2.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Cooking.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Eating_Cotton_Candy.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Legos.jpg" />
                </div>
            </div>
            <div class="photoRow">
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Ping-Pong.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Snowman.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Breakfast.jpg" />
                </div>
                <div class="photoCol"> <img class="photoImage" src="../assets/images/gallery/Reading.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PhotoGallery",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.photosContainer {
    width: 100%;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;

    padding: 68px 88px;
    gap: 32px;

    /* White */

    background: #FFFFFF;

    /* Inside auto layout */

    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}

.photosTitle {
    /* Title2 | Black */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 49px;

    /* Dark Blue */

    color: #2B70C9;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.photoBox {
    @extend .container;
    @extend .justify-content-between;
    @extend .mx-auto;
    width: 90%;
}

.photoRow {
    @extend .row;
}

.photoCol {
    @extend .col;
}

.photoImage {
    width: 90%;
    height: 90%;
    filter: drop-shadow(2px 2px 23px rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    @extend .mx-auto;
    @extend .my-auto;
    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;
}
</style>