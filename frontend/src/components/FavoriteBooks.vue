<template>
    <div id="favoriteBooksSection" class="booksContainer">
        <p class="booksTitle">Favorite Books</p>
        <div class="booksBox">
            <img class="book" src="../assets/images/books/LittleWomenCover.jpg" />
            <img class="book" src="../assets/images/books/NevermoorCover.jpg" />
            <img class="book" src="../assets/images/books/TheLittlePrince.jpg" />
            <img class="book" src="../assets/images/books/SecretSoldiersCover.jpg" />
            <img class="book" src="../assets/images/books/Unbroken.jpg" />
            <img class="book" src="../assets/images/books/WheretheMountainMeetstheMoonCover.jpg" />
            <img class="book" src="../assets/images/books/TheOldManAndTheSea.jpg" />
        </div>
    </div>
</template>
<script>
export default {
    name: "FavoriteBooks",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.booksContainer {
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

.booksTitle {
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

.booksBox {
    @extend .d-flex;
    @extend .justify-content-between;
    @extend .mx-auto;
    width: 90%;
}

.book {
    width: 10%;

    filter: drop-shadow(2px 2px 23px rgba(0, 0, 0, 0.1));
    border-radius: 8px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>