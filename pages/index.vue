<template>
  <div>
    <div class="hero samstyle">
      <div class="ovrlay">
        <div class="herotext">The ultimate clothing to see the world in.</div>
      </div>
    </div>
    <div class="skils">
      <v-container>
        <h3 style="text-align:center">using in this project</h3>
        <v-row no-gutters>
          <v-col cols="12" sm="3">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <div>
                  <img class="size" src="https://nuxtjs.org/logos/nuxt-emoji.png" alt />
                </div>
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>

          <v-col cols="12" sm="3">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <img
                  class="size"
                  src="https://pbs.twimg.com/profile_images/712118208552165378/X-KBhP4M_400x400.jpg"
                  alt
                />
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>

          <v-col cols="12" sm="3">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <div>
                  <img
                    class="size margin"
                    src="https://s3.amazonaws.com/coursetro/posts/144-full.png"
                  />
                </div>
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>

          <v-col cols="12" sm="3">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <div>
                  <img
                    class="size margin"
                    src="https://styles.redditmedia.com/t5_3nu8v/styles/communityIcon_zuqnf4r5ml111.png"
                    alt
                  />
                </div>
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="suphero samstyle">
      <div class="ovrlay">
        <div class="herotext">Be exclusive, Be Devine, Be yourself.</div>
      </div>
    </div>

    <!--  -->
    <div class="skils">
      <v-container>
        <v-row no-gutters>
          <v-col cols="12" sm="6">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <div>
                  <h1>new collection</h1>
                  <br />
                  <span>Different collection, simple it's very great</span>
                </div>
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>

          <v-col cols="12" sm="6">
            <!-- <template> -->
            <v-layout>
              <v-flex xs12 sm6 offset-sm3>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati temporibus eum dolores cum incidunt magni optio adipisci. Ut pariatur adipisci recusandae vitae perferendis fuga eveniet temporibus totam. Quo, dicta laborum.</span>
              </v-flex>
            </v-layout>
            <!-- </template> -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home Nuxt",
      meta: [
        { name: "description", content: "This is my home description here." },
        { name: "keywords", content: "home nuxt, nuxt info" }
      ]
    };
  }
};
</script>

<style scoped>
.samstyle {
  /* margin-top: -50px; */
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center center;
  position: relative;
  text-align: center;
}
.hero {
  background-image: url("https://images.squarespace-cdn.com/content/5ab6dd92ee1759b04ca214fd/1549319498737-60FFHJSX50IZ365U7AFJ/Mayer+Wasner_Shop.png?format=1500w&content-type=image%2Fpng");
}
.suphero {
  background-image: url("https://images.pexels.com/photos/2447042/pexels-photo-2447042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
}
.herotext {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: 100;
  color: #fff;
}
.hero .ovrlay,
.suphero .ovrlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
h1,
h4 {
  margin: auto;
}
.skils {
  margin: 100px 0;
  text-align: center;
}
.black {
  color: #000;
}
.size {
  width: 150px;
  margin: auto;
}
.margin {
  margin-top: 50px;
}
@media screen and (max-width: 768px) {
  .herotext {
    font-size: 35px;
  }
  .hero {
    margin-top: 0;
  }
}
</style>