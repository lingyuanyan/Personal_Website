<template>
    <div id="myHobbiesSection" class="hobbiesContainer">
        <p class="hobbiesTitle">My Hobbies</p>
        <div class="hobbiesBox">
            <div class="hobbiesRow">
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-gamepad-modern" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing games</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-books" />
                    </span>
                    <p style="margin-top: 0.25em;">Read books</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-camera-movie" />
                    </span>
                    <p style="margin-top: 0.25em;">Watching movies</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-user-group" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing with friends</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-music" />
                    </span>
                    <p style="margin-top: 0.25em;">Listening to music</p>
                </div>
            </div>
            <div class="hobbiesRow">
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-guitar" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing guitar</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-bicycle" />
                    </span>
                    <p style="margin-top: 0.25em;">Riding bikes</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-dragon" />
                    </span>
                    <p style="margin-top: 0.25em;">Learn fascinating things</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-person-skiing" />
                    </span>
                    <p style="margin-top: 0.25em;">Skiing</p>
                </div>
                <div class="hobbiesCol">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-circle-plus" />
                    </span>
                    <p style="margin-top: 0.25em;">And more</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyHobbies",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.hobbiesContainer {
    width: 100%;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;

    padding: 68px 88px;
    gap: 32px;

    /* Gray01 */

    background: #F8F8F8;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}

.hobbiesTitle {
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

.hobbiesBox {
    @extend .container;
    @extend .mx-auto;
    width: 90%;
}

.hobbiesRow {
    @extend .row;
}

.hobbiesCol {
    @extend .col;
}

.hobbyIcon {
    font-size: 3em;
    color: #1CB0F6;
}

.hobbyTitle {
    /* Title4 | Bold */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    /* identical to box height, or 180% */


    /* Charcoal */

    color: #222222;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>