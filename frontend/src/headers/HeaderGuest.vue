<template>
    <div class="linkBox">
        <router-link class="routerLink" to="#" v-scroll-to="'#aboutMeSection'">About Me</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#favoriteBooksSection'">My Hobbies</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#favoriteBooksSection'">Favorite Books</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#photoGallerySection'">Photo Gallery</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#myProjectsSection'">Projects and Achievements</router-link>
        <router-link class="routerLink" to="#" v-scroll-to="'#footer'">Contacts </router-link>
    </div>
</template>
<script>
export default {
    name: "HeaderGuest",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.linkBox{
    @extend .d-flex;
    @extend .justify-content-end;
}
.routerLink {

    /* Title3 | Black */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;

    /* identical to box height, or 150% */
    text-align: center;

    /*padding*/
    @extend .mx-3;
    /* White */
    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}
</style>