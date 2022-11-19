<template>
    <div id="myHobbiesSection" class="hobbiesContainer">
        <p class="hobbiesTitle">My Interests</p>
        <div class="hobbiesBox">
            <div class="hobbiesRow">
                <div class="hobbiesCol" @click="showPopUp1 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-palette" />
                    </span>
                    <p style="margin-top: 0.25em;">Drawing</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp2 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-books" />
                    </span>
                    <p style="margin-top: 0.25em;">Reading Books</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp3 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-camera-movie" />
                    </span>
                    <p style="margin-top: 0.25em;">Watching movies</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp4 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-user-group" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing with friends</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp5 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-music" />
                    </span>
                    <p style="margin-top: 0.25em;">Listening to music</p>
                </div>
            </div>
            <div class="hobbiesRow">
                <div class="hobbiesCol" @click="showPopUp6 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-guitar" />
                    </span>
                    <p style="margin-top: 0.25em;">Playing guitar</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp7 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-bicycle" />
                    </span>
                    <p style="margin-top: 0.25em;">Riding bikes</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp8 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-dragon" />
                    </span>
                    <p style="margin-top: 0.25em;">Learn fascinating things</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp9 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-person-skiing" />
                    </span>
                    <p style="margin-top: 0.25em;">Skiing</p>
                </div>
                <div class="hobbiesCol" @click="showPopUp10 = true">
                    <span class="hobbyIcon">
                        <font-awesome-icon icon="fa-thin fa-circle-plus" />
                    </span>
                    <p style="margin-top: 0.25em;">And more</p>
                </div>

                <div class="popUp" v-show="showPopUp1" @click.self="showPopUp1 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <h3>I love Drawing</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                    <p>>click anywhere to close popup</p>
                </div>
                <div class="popUp" v-show="showPopUp2" @click.self="showPopUp2 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Reading</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp3" @click.self="showPopUp3 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love watching movies</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp4" @click.self="showPopUp4 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Playing with friends</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp5" @click.self="showPopUp5 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Listening to Music</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp6" @click.self="showPopUp6 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Playing the Guitar</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp7" @click.self="showPopUp7 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love riding bikes</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp8" @click.self="showPopUp8 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Learning fascinating things</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp9" @click.self="showPopUp9 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>I love Skiing</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="popUp" v-show="showPopUp10" @click.self="showPopUp10 = false">
                    <div class="card">
                        <div class="xWrapper">
                            <img class="popUpImg" src="../assets/images/gallery/Biking.jpg" alt="">
                            <div class="yWrapper">
                                <div class="closeWrapper">
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                                <div class="whiteSpace">

                                </div>
                                <h3>And More</h3>
                                <p>biking is fun porque it is fun</p>
                            </div>
                        </div>
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
    watch: {
        /**
        clicked(value) {
            this.showPopUp1 = false;
            this.showPopUp2 = false;
            this.showPopUp3 = false;
            this.showPopUp4 = false;
            this.showPopUp5 = false;
            this.showPopUp6 = false;
            this.showPopUp7 = false;
            this.showPopUp8 = false;
            this.showPopUp9 = false;
            this.showPopUp10 = false;
            console.log("clicked" + value);
            switch (value) {
                case 1: this.showPopUp1 = true; return;
                case 2: this.showPopUp2 = true; return;
                case 3: this.showPopUp3 = true; return;
                case 4: this.showPopUp4 = true; return;
                case 5: this.showPopUp5 = true; return;
                case 6: this.showPopUp6 = true; return;
                case 7: this.showPopUp7 = true; return;
                case 8: this.showPopUp8 = true; return;
                case 9: this.showPopUp9 = true; return;
                case 10: this.showPopUp10 = true; return;
            }
        }*/
    },
    components: {},
    computed: {},
    methods: {
    },
};
</script>

<style scoped lang="scss">
.whiteSpace {
    width: 106px;
    height: 85px;
    background: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 1;
}

h4 {
    width: 208px;
    height: 36px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;
    color: #222222;
    flex: none;
    order: 2;
    flex-grow: 0;
}

.closeWrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    gap: 10px;
    width: 368px;
    height: 32px;
    flex: none;
    order: 0;
    align-self: stretch;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 48px;
    gap: 19px;
    opacity: 1;
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
    background: #222222;
    opacity: 1.0;
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

.hobbyTitle {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    color: #222222;
    flex: none;
    order: 1;
    flex-grow: 0;
}
</style>