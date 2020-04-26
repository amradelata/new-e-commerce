<template>
  <section class="container about">
    <div class="top">
      <p class="subheading">About Me</p>

      <h1>Name: Amr-Adel-Ata</h1>
      <p class="content">I'm Front end developer I made this website to show my skills,</p>
      <p class="subheading">
        my website:
        <a href="https://amradelata.github.io/">click here</a>
      </p>
      <p class="subheading">
        my github:
        <a href="https://github.com/amradelata">click here</a>
      </p>
      <p class="content">
        feel free to contact me on my email
        <strong>amradelata@gmail.com</strong>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "About Nuxt",
      meta: [
        { name: "description", content: "This is my about description here." },
        { name: "keywords", content: "about nuxt, nuxt info" }
      ]
    };
  }
};
</script>

<style csoped>
.content {
  font-size: 30px;
  margin-bottom: 35px;
}
</style>
