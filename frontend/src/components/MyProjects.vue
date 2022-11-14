<template>
    <div id="myProjectsSection" class="projectsContainer">
        <p class="projectsTitle">Projects and Achievements</p>
        <div class="projectBox">
            <div class="navContainer">
                <ul class="navList">
                    <li class="nav-item">
                        <span ref="projectNavLinkId1" class="projectNavLink" :class="{ active: showProject1 }"
                            @click="onNavClick(1, $event)">Qualifying for USACO Bronze</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId2" class="projectNavLink" :class="{ active: showProject2 }"
                            @click="onNavClick(2, $event)">TurtleMaster Club</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId3" class="projectNavLink" :class="{ active: showProject3 }"
                            @click="onNavClick(3, $event)">Learning From Online Courses</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId4" class="projectNavLink" :class="{ active: showProject4 }"
                            @click="onNavClick(4, $event)">CTEF Art Contest Awards</span>
                    </li>
                </ul>
            </div>
            <div class="projectList">
                <div id="project2" class="projectFrame" v-if="showProject1">
                    <img class="projectImage" src='../assets/images/projects/usacoPic.jpg' />
                    <p class="projectTitle">Qualifying for the USACO Bronze</p>
                    <p class="projectDescription">USACO, or United States of America Coding Olympiad is one of the 
                        most prestigest and difficult coding competitions in the world, and passing into its bronze
                        division maybe one of my proudest acheivments yet. After I started doing Competetive 
                        Programming in my sixth, I knew it was a hard competition and in my early attempts I scored 
                        horrendously. I knew this a contest designed at the high school or even college level so I 
                        wasn't suprised I'd failed. Still, I really wanted to pass, leading me to dedicating many 
                        hours each day to practicing do I could attempt this competition again the year after. 
                        After alot of work and practice, I was able to not only pass the Bronze division, but also 
                        excel in the top 15% of 5000 participants. Not only that, but me being a seventh grader 
                        score over many potential high schoolers, college students, and adults only makes this 
                        more and more of a impressive feat for me. As I am writing this in 2022, I look to seeing 
                        how I will do in this year's competition as I challenge the ever more difficult silver 
                        division.
                    </p>
                </div>
 
                <div id="project1" class="projectFrame" v-if="showProject2">
                    <img class="projectImage" src='../assets/images/projects/TurtleMaster_Logo.png' />
                    <p class="projectTitle">TurtleMaster Club</p>
                    <p class="projectDescription">When I was in 6th grade, I had just finished learning coding and 
                        Computer Science and wanted to do something impactful that was also related to my new-found
                        skill. This lead me to starting a brand new club in my community called TurtleMasters Club.
                        Through this club, I was able to meet and recruit other children also intrested in Programming.
                        Together, we would work on many projects like making websites or even making games if we wanted.
                        These projects included:
                        <ul>
                            <li>Making a website called covidhub.io that gave current information about the panemic and COVID-19</li>
                            <li>Making a website for a volunteer group called FurFriendsRescue that helped and rescued stray dogs</li>
                            <li>Recreated the popular game minesweeper without using game engines or other libraries.</li>
                        </ul>
                    </p>
                </div>
                <div id="project3" class="projectFrame" v-if="showProject3">
                    <img class="projectImage" src='../assets/images/projects/CoursePic.jpeg' />
                    <p class="projectTitle">Learning From Online Courses</p>
                    <p class="projectDescription">At the beginning of my Programming expierience I started out learning Programming
                        skills and languages from online courses created by professors from many prestigous colleges likes Princeton
                        University or the University of Michigan. From these courses I learned a variety of things ranging from basic
                        programming skills to website design and development to complex algorithms or data structures used in computer 
                        science. These courses include:
                    </p>
                    <ul>
                        <li><a href="https://www.coursera.org/specializations/python?">Python for Everybody</a></li>
                        <li><a href="https://www.coursera.org/specializations/web-design?">Web Design for Everbody: Basics of Web Developement and Coding Specialization</a></li>
                        <li><a href="https://www.coursera.org/learn/cs-programming-java?">Computer Science: Programming with a Purpose</a></li>
                        <li><a href="https://www.coursera.org/learn/cs-algorithms-theory-machines">Computer Science: Algorithms, Theory, and Machines</a></li>
                        <li><a href="https://www.coursera.org/learn/algorithms-part1">Algorithms, Part I</a></li>
                        <li><a href="https://www.coursera.org/learn/algorithms-part2">Algorithms, Part II</a></li>
                    </ul>
                    <p class="projectDescription">
                        All these courses were especially well made and I am very thankful to have been fortunate enough to access to 
                        wonderful resources like these. I am able to use the skills I learned from these courses constantly throughout 
                        my life in way like making this website for example or everyday when practicing for USACO.
                    </p>
                </div>
                <div id="project4" class="projectFrame" v-if="showProject4">
                    <img class="projectImage" src='../assets/images/projects/Drawing.png' />
                    <p class="projectTitle">Art Contest Awards</p>
                    <p class="projectDescription">
                        One of my greatest passions since a very young age has always been in the Arts. I have been taking art lessons 
                        at a place called YongLi Art Studio since first grade and has always loved drawing, painting, or even just 
                        doodling when I have nothing better to do. one of the great things about my art teacher is that she would 
                        encourage us to submit our pieces into art competitions, especially at an art competition she supported called
                        the CTEF Art Contest. I myself have submitted many art pieces there and have even ended up winning some awards.
                        For example, I  was awarded with the Award of Excellence in both 2015 and 2016 but also acheived 3rd place in 
                        the 2019 CTEF competition of which I am very proud. Outside of CTEF competitions, I also once submitted an art 
                        piece to my elementary school art contest called the Smith Reflections Contest and was able to earn Honorable 
                        Mentions there as well. 
                    </p>
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