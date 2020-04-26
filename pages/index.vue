<template>
  <div class="flex">
    <v-parallax
      class="hero"
      dark
      src="http://static1.squarespace.com/static/5ab6dd92ee1759b04ca214fd/t/5c58bd4524a694d91c7fe6d1/1549319504611/Mayer+Wasner_Shop.png?format=1500w"
    ></v-parallax>
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
                    class="size"
                    src="https://s3.amazonaws.com/coursetro/posts/144-full.png"
                    style="margin-top: 50px"
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
                    class="size"
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

    <v-parallax
      src="https://images.pexels.com/photos/2447042/pexels-photo-2447042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      height="500"
    ></v-parallax>

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
.hero {
  height: 130vh;
  margin-top: 50px;
  /* display: none; */
}
h1,
h4 {
  margin: auto;
}
.skils {
  margin: 100px 0;
}
.black {
  color: #000;
}
.size {
  width: 150px;
  margin: auto;
}
/* .spanCenter{
    text-align: center !important;
    margin: auto !important;
    justify-content: center !important;
} */
</style>