<template>
  <div class="top container">
    <nuxt-link to="/signIn">sign up</nuxt-link>

    <nuxt-link to="/logIn">login</nuxt-link>

    <v-card-text>
      <v-form class="px-3" ref="form">
        <v-text-field v-model="firstName" label="first name" :rules="nameRules"></v-text-field>
        <v-text-field v-model="lastName" label="last name" :rules="nameRules"></v-text-field>
        <v-text-field v-model="email" label="email" :rules="emailRules"></v-text-field>
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
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      email: "",
      lastName: "",
      firstName: ""
    };
  },
  methods: {
    async submit() {
      // console.log(this.password,this.email,this.lastName,this.firstName)
      const nameres = await axios.get(
        `https://vue-e-commerce-databse.herokuapp.com/users/?firstName=${this.firstName}`
      );
      const res = await axios.post(usersArray, {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });
      localStorage.setItem("status", "loggedIn");
      localStorage.setItem("userfirstName", this.firstName);
      localStorage.setItem("userlastName", this.lastName);
      localStorage.setItem("useremail", this.email);
      localStorage.setItem("userpassword", this.password);

      if (
        (this.firstName === "",
        this.lastName === "",
        this.email === "",
        this.password === "")
      ) {
        return;
      } else if (nameres.data.length > 0) {
        alert("this _username_ taken");
        return;
      }
      this.$router.replace("/payment");
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
