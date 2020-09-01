<template>
  <div class="thankYou">
    <div class="thankYoucontent">
      <img
        class="thankYouImg"
        src="https://cdn.dribbble.com/users/637635/screenshots/6065726/800_600_2.gif"
        alt
      />
      <nuxt-link to="/products">
        <v-btn class="thankYouBtn">back to shopping</v-btn>
      </nuxt-link>
      <p class="expect">Expect delivery from 2 to 3 days work</p>
    </div>
  </div>
</template>


<style scoped>
.thankYou {
  position: relative;
  height: 100vh;
}
.thankYoucontent {
  text-align: center;
  position: absolute;
  margin-top: 460px;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%);
}
.thankYoucontent img {
  width: 100%;
  /* height: 100vh; */
}
.thankYouBtn {
  margin: 35px 0;
}

@media screen and (max-width: 768px) {
  .thankYoucontent {
    margin-top: 300px;
  }
  .thankYoucontent img {
    width: 100vw;
  }
}
</style>

