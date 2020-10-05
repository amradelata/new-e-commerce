<template>
  <div class="top container">
    <nuxt-link to="/signIn">sign in</nuxt-link>
    <nuxt-link to="/logIn">log in</nuxt-link>
    <v-card-text>
      <v-form class="px-3" ref="form">
        <v-text-field v-model="firstName" label="first name" :rules="nameRules"></v-text-field>
        <v-text-field v-model="password" label="password" :rules="nameRules"></v-text-field>
        <v-btn @click="submit()">SIGN IN</v-btn>
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
      email: this.email
    };
  },
  methods: {
    async submit() {
      const nameres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?firstName=${this.firstName}`
      );

      const passwordres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?firstName=${this.password}`
      );

      if (nameres.data.length > 0 && passwordres.data.length > 0) {
        this.$router.replace("/payment");
      } else if (nameres.data.length === 0 && passwordres.data.length === 0) {
        alert("The password or username is wrong");
      } else {
        return;
      }

      localStorage.setItem("status", "loggedIn");
      localStorage.setItem("userfirstName", this.firstName);
      localStorage.setItem("userpassword", this.password);
      localStorage.setItem("useremail", this.email);
    }
  }
};
</script>
