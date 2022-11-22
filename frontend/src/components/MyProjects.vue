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
                            @click="onNavClick(4, $event)">Art Contest Awards</span>
                    </li>
                    <li class="nav-item">
                        <span ref="projectNavLinkId5" class="projectNavLink" :class="{ active: showProject5 }"
                            @click="onNavClick(5, $event)">Volunteering Awards</span>
                    </li>
                </ul>
            </div>
            <div class="projectList">
                <div id="project2" class="projectFrame" v-if="showProject1">
                    <img class="projectImage" src='../assets/images/projects/usacoPic.jpeg' loading=lazy/>
                    <p class="projectTitle">Qualifying for the USACO Bronze</p>
                    <p class="projectDescription">
                        During 6th grade, I learned about a popular competitive programming competition called USACO, or United States of America Coding Olympiad. It is known to be one of the most challenging and difficult coding competitions in the country and was mainly designed for high school and college students. The way USACO works is that it is split into four divisions: Bronze, Silver, Gold and Platinum, with each division increasing in difficulty. Even though Bronze is only the first division, it is still very difficult, especially since USACO was not designed at a middle school level. At the beginning, I was still inexperienced since I had only just learnt how to code. In fact, the first time I tried, I failed horrendously. After that, I spent significant time practicing with problems from their past contests and after several months I was finally about to qualify for USACO Bronze in my 7th grade. Not only that, I passed in the top 15% in that competition, beating about 3,400 people. Currently, I am studying under a brilliant instructor who is helping me prepare for the next competition in December where I to be able to qualify for the Silver division this time as an 8th grader.
                    </p>
                </div>
 
                <div id="project1" class="projectFrame" v-if="showProject2">
                    <img class="projectImage" src='../assets/images/projects/TurtleMaster_Logo.png' />
                    <p class="projectTitle">TurtleMaster Club</p>
                    <p class="projectDescription">
                        In 6th grade, I had just finished learning coding and Computer Science and wanted to do something impactful that was also related to my new-found skill. This led me to founding a brand-new club in my community called TurtleMasters Club. Through this club, I was able to meet and recruit other children also interested in Programming. Together, we would work on many projects like making websites or even making games if we wanted. These projects included:                        <ul>
                            <li>Making a website called covidhub.io that gave current information about the pandemic and COVID-19</li>
                            <li>Making a website for a volunteer group called FurFriendsRescue that helped and rescued stray dogs</li>
                            <li>Recreated the popular game minesweeper using basic programming languages</li>
                        </ul>
                    </p>
                </div>
                <div id="project3" class="projectFrame" v-if="showProject3">
                    <img class="projectImage" src='../assets/images/projects/CoursePic.jpeg' />
                    <p class="projectTitle">Learning From Online Courses</p>
                    <p class="projectDescription">
                        At the beginning of my computer programming experience, I started out learning programming skills and languages from online courses created by professors from many prestigious colleges like Princeton University and the University of Michigan. From these courses I learned a variety of things ranging from basic programming skills to website design and development to complex algorithms or data structures used in computer science. These courses include:                  
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
                        All these courses were especially well made, and I am very thankful to have been fortunate enough to access wonderful resources like these. I was able to use the skills I learned from these courses constantly throughout my life in ways such as making this website or when practicing for USACO.                    
                    </p>
                </div>
                <div id="project4" class="projectFrame" v-if="showProject4">
                    <img class="projectImage" src='../assets/images/projects/Drawing.png' />
                    <p class="projectTitle">Art Contest Awards</p>
                    <p class="projectDescription">
                        One of my greatest passions since a very young age has always been visual art. I have been taking art lessons at YongLi Art Studio since 1st grade and have always loved sketching, painting, and even just doodling. One of the great things about my art teacher is that she taught us a variety of art skills from acrylic to watercolor to sketching. She would also encourage us to submit our pieces into art competitions, especially at an art competition she supported called the CTEF Art Contest. I have submitted many art pieces there and have won several awards. For example, I was awarded with the Award of Excellence in both 2015 and 2016 but also achieved 3rd place in the 2019 CTEF competition. Outside of CTEF competitions, I also once submitted an art piece to my elementary school art contest called the Smith Reflections Contest and won Honorable Mention.                    
                    </p>
                </div>
                <div id="project5" class="projectFrame" v-if="showProject5">
                    <img class="projectImage" src='../assets/images/projects/garageSale.jpg' />
                    <p class="projectTitle">Volunteering</p>
                    <p class="projectDescription">
                        Outside of Little Masters Club I also volunteered at several places.  One is with an organization called Footprints that helped, saved, and nurtured injured wildlife in my local area. I also volunteer at my school.
                        <ul>
                        <li>Online Reading where I taught weekly English to children in China weekly.</li>
                        <li>FurFriends Rescue, a group that helps stray animals find homes and raises money. There I helped volunteer in their numerous events but also used my expertise to help them make their website.</li>
                        <li>Shanxi Education Support where I went to a small rural village in China and taught English and science as an Assistant Teacher.</li>
                        <li>Little Masters Club Summer Camp where I taught a class about programming using the java programing language.</li>
                    </ul>
                        Outside of Little Masters Club I also volunteered at several places.  One is with an organization called Footprints that helped, saved, and nurtured injured wildlife in my local area. I also volunteer at my school.                    
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
            showProject5: false,
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
            this.showProject5 = false;

            switch (index) {
                case 1: this.showProject1 = true; return;
                case 2: this.showProject2 = true; return;
                case 3: this.showProject3 = true; return;
                case 4: this.showProject4 = true; return;
                case 5: this.showProject5 = true; return;
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
li {
    @extend .projectDescription;
    text-align: left;
}
</style>