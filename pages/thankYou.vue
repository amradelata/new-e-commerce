<template>
  <div>
    <img
      class="thankYouImg"
      src="https://cdn.dribbble.com/users/637635/screenshots/6065726/800_600_2.gif"
      alt
    />

    <nuxt-link to="/products">
      <button class="thankYouBtn">back to shopping</button>
    </nuxt-link>
    <p class="expect">Expect delivery from 2 to 3 days work</p>
  </div>
</template>



<style scoped>
.thankYouImg {
  margin: 100px;
  height: 60vh;
}
.thankYou {
  position: relative;
}
button {
  position: absolute;
  top: 30%;
  right: 20%;
  color: #3498db;
  box-shadow: none;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #3498db;
}
button:hover {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.expect {
  position: absolute;
  top: 40%;
  right: 15%;
  /* text-align: right; */
}
</style>
