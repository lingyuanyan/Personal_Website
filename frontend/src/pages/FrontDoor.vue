<template>
    <div>
        <about-me></about-me>
        <my-resume></my-resume>
        <my-hobbies></my-hobbies>
        <favorite-books></favorite-books>
        <my-projects></my-projects>
        <photo-gallery></photo-gallery>

    </div>
</template>

<script>
import AboutMe from '../components/AboutMe';
import MyResume from '../components/MyResume';
import MyHobbies from '../components/MyHobbies';
import FavoriteBooks from '../components/FavoriteBooks';
import MyProjects from '../components/MyProjects';
import PhotoGallery from '../components/PhotoGallery';

export default {
    name: "FrontDoor",
    props: {},

    data() {
        return {
        };
    },

    components: {
        AboutMe,
        MyResume,
        MyHobbies,
        FavoriteBooks,
        MyProjects,
        PhotoGallery
    },

    created() { },
    mounted() {
    },
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
