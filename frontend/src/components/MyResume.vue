<template>
    <div id="MyResume" class="backContainer">
        <h3>My Resume</h3>
        <p>Here is a small portion of my resume. If you would like to look at the rest of the rest of my resume, click on <a href="https://1drv.ms/w/s!Aio0qlo3Mk0KgYBxaxcdtDX5nRs5Rg?e=pGEe2e">this link</a></p>
        <div class="textRow">
            <div class="textCol">
                <h4>Academic Education</h4>
                <p>Grades 6-8: Inglewood Middle School, Sammamish, WA</p>
                <p>Grades K-5: Samantha Smith Elementary School, Sammamish, WA</p>
                <h4>Online Courses</h4>
                <p>2021 – Jun-Sep <a href="https://www.coursera.org/learn/algorithms-part1">Algorithms, Part I – Princeton University</a></p>
                <p>2021 – Feb-May <a href="https://www.coursera.org/learn/algorithms-part2">Algorithms, Part II – Princeton University</a></p>
                <p>2020 – Sep-Nov <a href="https://www.coursera.org/learn/cs-programming-java?">Computer Science: Programming with a Purpose – Princeton University</a></p>
                <p>2020 – Aug-Sep <a href="https://www.coursera.org/learn/cs-algorithms-theory-machines">Computer Science: Algorithms, Theory, and Machines – Princeton University</a></p>
                <p>2020 – Jul-Aug <a href="https://www.coursera.org/specializations/web-design?">Web Design for Everybody: Basics of Web Development & Coding – University of Michigan</a></p>
                <p>2020 – Jun-Jul <a href="https://www.coursera.org/specializations/python?">Python for Everybody – University of Michigan</a></p>
            </div>
            <div class="textCol">
                <h4>Technological Achievements</h4>
                <p>2022 – Aug	        Conducted a 10-day Learning Session to 16 students between 8-12 years old in Little Masters Summer School (<a href="https://littlemastersclub.org/?adlt=strict&toWww=1&redig=2D50177E29DC47A49092C403D5C95380">LMC</a>), teaching Java programming language</p>
                <p>2021 – Feb		    Qualified for USA Computing Olympiad Bronze Division (<a  href="http://www.usaco.org/index.php">USACO</a>) </p>
                <p>2020 – Jun-Present	Founder & President: Turtle Master Computer Science Club:</p>
                <ul>
                    <li>Led students studying computer science</li>
                    <li>Learned web programming including HTML5 and JavaScript</li>
                    <li>Learned the Java programming language</li>
                    <li>Designed and programmed Minesweeper game through coding</li>
                    <li>Designed and programmed website <a href="covidhub.io">covidhub.io</a> to spread knowledge and information about the COVID-19 pandemic</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyResume",
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
a {
    text-decoration: none;
}
h3 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 49px;
    color: #2B70C9;
    flex: none;
    order: 0;
    flex-grow: 0;
}
h4 {
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
.backContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 68px 50px;
    gap: 32px;
    background: #FFFFFF;
    flex: none;
    order: 3;
    align-self: stretch;
    flex-grow: 0;
}
.textRow {
    display: flex;
    @extend .row;
}
.textCol {
    @extend .col;
}
ul {
    text-align: left;
}

p {
    text-align: left;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
    flex: none;
    flex-grow: 0;
}
li {
    text-align: left;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 21px;
    color: #222222;
    flex: none;
    order: 1;
    flex-grow: 0;
}

</style>