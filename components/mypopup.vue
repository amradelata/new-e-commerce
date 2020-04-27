<template>
  <div>
    <div ref="mypopup" class="mypopup">
      <img src="https://www.amradelata.com/_nuxt/img/a33ef89.png" />
      <div>
        <v-btn>
          <a href="https://www.amradelata.com/">see more of my projects</a>
        </v-btn>
        <v-btn @click="closepopup()">close</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showpopup() {
      this.$refs["mypopup"].style.display = "block";
    },
    closepopup() {
      this.$refs["mypopup"].style.display = "none";
    }
  },
  mounted() {
    setTimeout(() => {
      this.showpopup();
    }, 7000);
  }
};
</script>

<style scoped>
.mypopup {
  display: none;
  text-align: center;
  background: #fff;
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.mypopup img {
  width: 350px;
}
.mypopup .v-btn {
  margin: 10px 0;
}
@media screen and (max-width: 768px) {
  .mypopup img {
    width: 100%;
  }
}
</style>