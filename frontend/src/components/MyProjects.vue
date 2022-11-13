<template>
    <div id="myProjectsSection" class="projectsContainer">
        <p class="projectsTitle">Projects and Achievements</p>
        <div class="projectBox">
            <div class="navContainer">
                <ul class="navList">
                    <li class="nav-item">
                        <span ref="projectNavLinkId1" class="projectNavLink" :class="{ active: showProject1 }"
                            @click="onNavClick(1, $event)">Project
                            1</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId2" class="projectNavLink" :class="{ active: showProject2 }"
                            @click="onNavClick(2, $event)">Project 2</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId3" class="projectNavLink" :class="{ active: showProject3 }"
                            @click="onNavClick(3, $event)">Project 3</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId4" class="projectNavLink" :class="{ active: showProject4 }"
                            @click="onNavClick(4, $event)">Project 4</span>
                    </li>
                </ul>
            </div>
            <div class="projectList">
                <div id="project1" class="projectFrame" v-if="showProject1">
                    <img class="projectImage" src='../assets/images/projects/Graduation.jpg' />
                    <p class="projectTitle">Secondary title (e.g., date, location)</p>
                    <p class="projectDescription">Here is a brief introduction of my project or my archievement. Et
                        morbi imperdiet ornare dignissim quis. Dictum consectetur nunc mauris nibh pulvinar fames
                        tincidunt. </p>
                </div>
                <div id="project2" class="projectFrame" v-if="showProject2">
                    <img class="projectImage" src='../assets/images/projects/Graduation.jpg' />
                    <p class="projectTitle">Secondary title (e.g., date, location)</p>
                    <p class="projectDescription">Here is a brief introduction of my project or my archievement. Et
                        morbi imperdiet ornare dignissim quis. Dictum consectetur nunc mauris nibh pulvinar fames
                        tincidunt. </p>
                </div>
                <div id="project3" class="projectFrame" v-if="showProject3">
                    <img class="projectImage" src='../assets/images/projects/Graduation.jpg' />
                    <p class="projectTitle">Secondary title (e.g., date, location)</p>
                    <p class="projectDescription">Here is a brief introduction of my project or my archievement. Et
                        morbi imperdiet ornare dignissim quis. Dictum consectetur nunc mauris nibh pulvinar fames
                        tincidunt. </p>
                </div>
                <div id="project4" class="projectFrame" v-if="showProject4">
                    <img class="projectImage" src='../assets/images/projects/Graduation.jpg' />
                    <p class="projectTitle">Secondary title (e.g., date, location)</p>
                    <p class="projectDescription">Here is a brief introduction of my project or my archievement. Et
                        morbi imperdiet ornare dignissim quis. Dictum consectetur nunc mauris nibh pulvinar fames
                        tincidunt. </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyProjects", data() {
        return {
            showProject1: true,
            showProject2: false,
            showProject3: false,
            showProject4: false,
        }
    },
    components: {},
    computed: {},
    methods: {
        onNavClick(index, event) {
            event;
            this.showProject1 = false;
            this.showProject2 = false;
            this.showProject3 = false;
            this.showProject4 = false;

            switch (index) {
                case 1: this.showProject1 = true; return;
                case 2: this.showProject2 = true; return;
                case 3: this.showProject3 = true; return;
                case 4: this.showProject4 = true; return;
            }
        }
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

.projectBox {
    @extend .d-flex;
    @extend .justify-content-between;
}

.navContainer {
    width: 30%;
}

.navList {
    @extend .nav;
    @extend .flex-column;
    @extend  .nav-pills;
}

.projectNavLink {
    @extend .nav-link;
    cursor: pointer;
}

.projectList {
    width: 70%;
}

.projectFrame {
    width: 100%;
}

.projectImage {
    width: 90%;
    @extend .mx-auto;
}

.projectTitle {
    /* Title3 | Black */

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */


    /* Charcoal */

    color: #222222;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.projectDescription {
    /* Body | Regular */

    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */


    /* Charcoal */

    color: #222222;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>