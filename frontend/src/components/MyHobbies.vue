<template>
    <div class="hobbiesContainer">
        <p class="hobbiesTitle">My Hobbies</p>
        <div class="hobbiesBox">
            <div class="hobbiesRow">
                <div class="hobbiesCol">
                    <font-awesome-icon icon="fa-thin fa-gamepad-modern" />
                    <p>col</p>
                </div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
            </div>
            <div class="hobbiesRow">
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
                <div class="hobbiesCol">col</div>
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
    width: 90%;
}

.hobbiesRow {
    @extend .row;
}

.hobbiesCol {
    @extend .col;
}

.hobbyIcon {
    width: 32;
    height: 32;
}
</style>