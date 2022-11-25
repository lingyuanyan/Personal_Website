<template>
    <div id="myHobbiesSection" class="hobbiesContainer">
        <p class="hobbiesTitle">My Interests</p>
        <div class="hobbiesBox">
            <div class="hobbiesRow">
                <div class="hobbiesCol" @click="showPopUp1 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-code" />
                    </span>
                    <p style="margin-top: 0.25em;">Coding</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp2 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-books" />
                    </span>
                    <p style="margin-top: 0.25em;">Reading Books</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp3 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-dragon" />
                    </span>
                    <p style="margin-top: 0.25em;">Learn Fascinating Things</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp4 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-guitar" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing Guitar</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp5 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-palette" />
                    </span>
                    <p style="margin-top: 0.25em;">Visual Arts</p>
                </div>
            </div>
            <div class="hobbiesRow">
                <div class="hobbiesCol" @click="showPopUp6 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-person-running" />
                    </span>
                    <p style="margin-top: 0.25em;">Cross Country</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp7 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-person-skiing" />
                    </span>
                    <p style="margin-top: 0.25em;">Skiing</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp8 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-bicycle" />
                    </span>
                    <p style="margin-top: 0.25em;">Riding Bikes</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp9 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-user-group" />
                    </span>
                    <p style="margin-top: 0.25em;">Volunteering</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp10 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-circle-plus" />
                    </span>
                    <p style="margin-top: 0.25em;">And More</p>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp1" @click.self="showPopUp1 = false">
            <div class="card">
                <div class="xWrapper">
                    <video width="300" height="240" controls>
                        <source src="../assets/images/gallery/Minesweeper.mp4" type="video/mp4">
                    </video>                    
                    <div class="yWrapper">
                        <h3>Coding</h3>
                        <p>I started coding in my fourth grade and was introduced to Computer Sciecne through several really wonderful courses that you can read about in my acheivements section. The video to the left is a demostration of one my projects, which is a minesweeper game I coded up with the other members of my TurtleMasters Club</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp2" @click.self="showPopUp2 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/Reading.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Reading Books</h3>
                        <p>I really enjoy reading books, especially fictional books or really anything with a good story. I particularly enjoy fantasy or historical fiction. A short list of my favorites are availiable in the Favorite Books section below. </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp3" @click.self="showPopUp3 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/kurzgesagt2.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Learning Fascinating Things</h3>
                        <p>I always love learning cool and fascinating things from new instruments to little facts or discoveries. That is why I really enjoy watching educational videos in my free time from wonderful youtube channels like Kurzgesagt, Veritasium and GCP Grey which allows me to learn things ranging from physics to math to our Immune System.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp4" @click.self="showPopUp4 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/GuitarThinn.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Playing the Guitar</h3>
                        <p>I started playing music with the recorder in fourth grade and there I discovered my passion for music. Since then, I have tried a variety of instruments before finally moving onto my favorite instrument which is the guitar. Currently I play a classical guitar and enjoy playing many of my favorite songs there such as Jesu Joy of Man's Desiring and more.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp5" @click.self="showPopUp5 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/drawing.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Visual Arts</h3>
                        <p>I have been studying Visual Arts for the last 7 years with a really wonderful teacher at a place called YongLi Studio. There I developed my skills and passions in a variety of styles and forms of art from acrylic to water color to pencil sketches.</p>
                    </div>
                </div>
            </div>
            <p>>click anywhere to close popup</p>
        </div>
        <div class="popUp" v-show="showPopUp6" @click.self="showPopUp6 = false">
            <div class="card">
                <div class="xWrapper">
                    <!--<img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">-->
                    <div class="yWrapper">
                        <h3>Cross Country</h3>
                        <p>I started running since I needed to do a sport and for my health, but then I realized that I really enjoyed it. After that, I ran everyday in the morning during the summer and participated in Cross Country in my school. I loved running with my friends and getting faster and faster each time.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp7" @click.self="showPopUp7 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/skiing.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Skiing</h3>
                        <p>I started skiing in my fourth grade and have continued to learn and enjoy it ever since. Every year, I attend the Issaquah Ski and SnowBoard School, and has been there every year except during the pandemic. I am currently able to ski on the black slopes.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp8" @click.self="showPopUp8 = false">
            <div class="card">
                <div class="xWrapper">
                    <img class="popUpImg" src="../assets/images/gallery/bikingAtPond.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Biking</h3>
                        <p>I learned biking very early on and really enjoyed it. I like periodically going out for a bike ride to get where I want to go like to school, or just if I want to have some fun. I also enjoy riding with other people like with my friends or family.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp9" @click.self="showPopUp9 = false">
            <div class="card">
                <div class="xWrapper"> 
                    <img class="popUpImg" src="../assets/images/gallery/volunteerAward2019.jpg" alt="">
                    <div class="yWrapper">
                        <h3>Volunteering</h3>
                        <p>I really like helping other and the idea that one person can spread so much happiness and good will. That is why I have spent so much time volunteering in my community and working with other people to help other. Also, I am able to meet and see many new things as well.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="popUp" v-show="showPopUp10" @click.self="showPopUp10 = false">
            <div class="card">
                <div class="xWrapper" >
                    <h3 style="float: left;">And More Interests such as:</h3>
                    <div style="float: right;" class="yWrapper">
                        <ul>
                            <li>Sketching</li>
                            <li>Origami</li>
                            <li>Listening to Music</li>
                            <li>Solving the Rubik's Cube</li>
                            <li>Watching Online Videos</li>
                            <li>Woodworking</li>
                            <li>Arts and Crafts</li>
                            <li>Solving Puzzles</li>
                            <li>Birdwatching</li>
                            <li>Baking</li>
                            <li>Watching Movies</li>
                            <li>Playing games</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyHobbies",
    data() {
        return {
            showPopUp1: false,
            showPopUp2: false,
            showPopUp3: false,
            showPopUp4: false,
            showPopUp5: false,
            showPopUp6: false,
            showPopUp7: false,
            showPopUp8: false,
            showPopUp9: false,
            showPopUp10: false,
            clicked: 0,
        };
    },
    watch: {},
    components: {},
    computed: {},
    methods: {},
};
</script>

<style scoped lang="scss">
ul {
}
.yWrapper ul li {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    flex: none;
    order: 3;
    flex-grow: 0;
}
.yWrapper p {
    width: 368px;
    height: 224px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
    flex: none;
    order: 3;
    flex-grow: 0;
}

.yWrapper {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 0px;
    gap: 16px;
    width: 368px;
    height: 425px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.popUpImg {
    width: 354px;
    height: 425px;
    filter: drop-shadow(2px 2px 23px rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.xWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 746px;
    height: 425px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.card {
    all: initial;
    z-index: 60;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 48px;
    gap: 19px;
    opacity: 1.0 !important;
    position: absolute;
    width: 842px;
    height: 521px;
    display: flex;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 2px 2px 23px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    position: fixed;

}

.popUp {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    text-align: center;
    background:rgba(22,22,22,0.8);
}

.hobbiesContainer {
    width: 100%;
    @extend .d-flex;
    @extend .flex-column;
    @extend .justify-content-center;
    padding: 68px 88px;
    gap: 32px;
    background: #F8F8F8;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
}

.hobbiesTitle {
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

.hobbiesBox {
    @extend .container;
    @extend .mx-auto;
    width: 90%;
}

.hobbiesRow {
    @extend .row;
}

.hobbiesCol {
    @extend .col;
    color: #1CB0F6;
}

p {
    text-decoration: none;
    color: inherit;
}

.hobbyIcon {
    font-size: 3em;
    color: inherit;
}

a {
    color: inherit;
    text-decoration: none;
}

.hobbiesCol:hover {
    color: #2B70C9;
}
</style>