<template>
  <div class="thankYou">
    <div class="thankYoucontent">
      <div class="img"></div>
      <p class="expect">Expect delivery from 2 to 3 days work</p>
      <nuxt-link to="/products">
        <v-btn class="thankYouBtn">back to shopping</v-btn>
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>
.thankYou {
  position: relative;
}

.thankYoucontent {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 20%);
}
.img {
  width: 300px;
  height: 300px;
  background-image: url("https://cdn.dribbble.com/users/637635/screenshots/6065726/800_600_2.gif");
  background-size: cover;
  background-position: center center;
  margin: 20px 0;
}
.expect {
  margin: 20px 0;
}
button {
  display: block;
  text-align: center;
  margin: auto;
}
a {
  text-decoration: none;
}
</style>

