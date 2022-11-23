<template>
    <div id="aboutMeSection" class="backContainer">
        <div class="imageContainer">
            <img class="portrait" src="../assets/images/LingyuanPortraitSmaller.jpg" alt="Lingyuan Yan" />
        </div>
        <div class="textContainer">
            <p class="textHeader">My name is Lingyuan Yan. Welcome to my Website!</p>
            <p class="quote">"Be the change you wish to see in the world" - Mahatma Gandhi</p>
            <p class="textDetails">I am currently an 8th grader that lives in Washington State. Not only am I a student that loves learning, I am also a computer programmer, a passionate guitarist, and someone who loves sports.</p>
            
        </div>
        <div>       

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
.quote {
    font-style: italic;
    color: white;
    width: 583px;
}
.backContainer {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 156px 68px;
gap: 160px;

width: 100%;

/* Blue */

background: #1CB0F6;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
}

.imageContainer {
    width: 50%;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;
}

.portrait {
    width:450px;
    height: 450px;
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
    text-align: center;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;
}

.textHeader {
    /* Hi ! I am Lingyuan. Volutpat eu in elementum enim amet maecenas elit,
    facilisis ! */
    width: 583px;
    height: 135px;

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