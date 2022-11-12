<template>
    <div class="backContainer">
        <div class="imageContainer">
            <img class="portrait" src="../assets/images/legos.jpg" alt="Lingyuan Yan" />
        </div>
        <div class="textContainer">
            <p class="textHeader">Hi ! I am Lingyuan. Volutpat eu in elementum enim amet maecenas elit,
                facilisis !</p>
            <p class="textDetails">I am curiostiy and passionate about many things, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutMe",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.backContainer {
    width: 100%;
    @extend .d-flex;
    @extend .justify-content-center;
    background: #1CB0F6;
}

.imageContainer {
    width: 50%;
    @extend .flex-column;
    @extend .justify-content-center;
}

.portrait {
    width: 457px;
    height: 457px;
    @extend .rounded-circle;

    /* White */

    border: 16px solid #FFFFFF;
    filter: drop-shadow(2px 2px 23px rgba(0, 0, 0, 0.1));

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.textContainer {
    width: 50%;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;
}

.textHeader {
    /* Hi ! I am Lingyuan. Volutpat eu in elementum enim amet maecenas elit,
    facilisis ! */
    width: 583px;
    height: 224px;

    /* Title1 | Bold */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    /* or 117% */


    /* White */

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.textDetails {
    /* I am curiostiy and passionate about many things, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. */


    width: 583px;
    height: 96px;

    /* Body | Regular */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */


    /* White */

    color: #FFFFFF;

    opacity: 0.8;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
</style>