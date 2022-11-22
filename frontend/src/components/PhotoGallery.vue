<template>
    <div id="photoGallerySection" class="photosContainer">
        <p class="photosTitle">Photo Gallery</p>
        <div class="photoBox">
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Breakfast.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Eating_Cotton_Candy.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Epcot.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Flowers.jpg"/></div>
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/goldengatePic.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Epcot.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/JFK_park.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Legos.jpg"/></div>
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Plants.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Reading.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Lake.jpg"/></div>
            </div>
            <p class="photoSubTitle">Arts & Crafts</p>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Cooking.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/cuttingBoard.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/makingSoup.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/masonBeeHouse.jpg"/></div>
            </div>            
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/paintingUSA.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/penguinLockdown.jpg"/></div>
            </div>          

            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/treeArt.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/watercolorRiver.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/whistle.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/modelingChessSet.jpg"/></div>
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/modelingHoneyPot.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/busyBee.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/drawing.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/keychain.jpg"/></div>
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Drawing.png"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/timePainting.jpg"/></div>
            </div>
            <p class="photoSubTitle">Volunteering</p>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/bakingCookiesFFR.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/feeding.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/feedingRaccon.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/movingAnimals.jpg"/></div>
            
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/garageSale.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/GarageSale2.jpg"/></div>
            </div>
            <p class="photoSubTitle">Sports</p>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/bikeingPetals.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/faceBiking.jpg"/></div>
            </div>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Biking2.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Ping-Pong.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Ping-pong2.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/skiing.jpg"/></div>
            </div>
            <p class="photoSubTitle">Snow!</p>
            <div class="photoRow">
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/sledding.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Snow.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/Snowman.jpg"/></div>
                <div class="photoCol"><img class="photoImage" src="../assets/images/gallery/playingWithSnow.jpg"/></div>
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

.photoSubTitle {
        /* Title2 | Black */

        font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 42px;

    /* Dark Blue */

    color: #2B70C9;


    /* Inside auto layout */

    flex: none;
    order: 0;
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