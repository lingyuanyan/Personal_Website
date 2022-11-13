<template>
    <div class="projectsContainer">
        <p class="projectsTitle">Projects and Achievements</p>
    </div>
</template>
<script>
export default {
    name: "MyProjects",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.projectsContainer {
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

.projectsTitle {
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
</style>