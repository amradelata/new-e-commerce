<template>
  <v-app dark>
    <myNav />
    <!-- <mypopup /> -->
    <productNav />
    <div class="mybody">
      <nuxt />
    </div>

    <!-- <v-footer style="margin-top:100px">
      <span>
        Made by
        <a href="https://www.amradelata.com/">amradelata</a>
        &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>-->
  </v-app>
</template>

<script>
import myNav from "~/components/myNav.vue";
import mypopup from "~/components/mypopup.vue";
import productNav from "~/components/productNav.vue";
export default {
  components: {
    myNav,
    productNav,
    mypopup
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style scoped>
.mybody {
  margin-top: 100px;
}
@media screen and (max-width: 768px) {
  .mybody {
    margin-top: 0;
  }
}
</style>