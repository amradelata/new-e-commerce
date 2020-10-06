<template>
  <div class="top container">
    <nuxt-link to="/signIn">sign up</nuxt-link>

    <nuxt-link to="/logIn">login</nuxt-link>
    <v-card-text>
      <v-form class="px-3" ref="form">
        <v-text-field v-model="firstName" label="first name" :rules="nameRules"></v-text-field>
        <v-text-field v-model="email" label="email" :rules="nameRules"></v-text-field>
        <v-text-field v-model="password" label="password" :rules="nameRules"></v-text-field>
        <v-btn @click="submit()">GO</v-btn>
      </v-form>
    </v-card-text>
  </div>
</template>
<script>
import axios from "axios";
const usersArray = "https://vue-e-commerce-databse.herokuapp.com/users";
export default {
  data() {
    return {
      nameRules: [
        v => !!v || "Name is required",
        v => v.length >= 3 || "Name must be less than 10 characters"
      ],
      password: "",
      firstName: "",
      email: ""
    };
  },
  methods: {
    async submit() {
      const nameres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?firstName=${this.firstName}`
      );

      const passwordres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?password=${this.password}`
      );
      const emailres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?email=${this.email}`
      );
      console.log(nameres.data, passwordres, emailres);

      if ((this.firstName === "", this.email === "", this.password === "")) {
        return;
      } else if (
        nameres.data.length > 0 &&
        passwordres.data.length > 0 &&
        emailres.data.length > 0
      ) {
        this.$router.replace("/payment");
      } else if (
        nameres.data.length === 0 ||
        emailres.data.length === 0 ||
        passwordres.data.length === 0
      ) {
        alert("The password or username or email is wrong");
      } else {
        // return
      }

      localStorage.setItem("status", "loggedIn");
      localStorage.setItem("userfirstName", this.firstName);
      localStorage.setItem("userpassword", this.password);
      localStorage.setItem("useremail", this.email);
    }
  }
};
</script>
<style  scoped>
.v-application a {
  color: #000;
  text-decoration: none;
  background: #cccccc7d;
  padding: 10px;
}
</style>