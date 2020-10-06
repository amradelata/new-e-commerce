<template>
  <div>
    <ul class="productNav">
      <nuxt-link to="admin">
        <li>Control panel</li>
      </nuxt-link>
      <nuxt-link to="orders">
        <li>orders</li>
      </nuxt-link>
      <nuxt-link to="users">
        <li>users</li>
      </nuxt-link>
    </ul>

    <!-- phone -->
    <ul class="productNavPhone">
      <nuxt-link to="admin">
        <li>Control panel</li>
      </nuxt-link>
      <nuxt-link to="orders">
        <li>orders</li>
      </nuxt-link>
      <nuxt-link to="users">
        <li>users</li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.productNav {
  list-style-type: none;
  text-align: center;
  /* position: fixed; */
  right: 0;
  left: 0;
  /* top: 100px; */
  z-index: 9999;
}
.productNav li {
  display: inline;
}
.productNav a {
  display: inline-block;
  padding: 1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-size: 0.9em;
  transition: all 1s;
}
.productNav a:hover {
  text-decoration: underline;
}
/* phone */
.productNavPhone {
  list-style-type: none;
  text-align: center;
  position: fixed;
  z-index: 9999;
  /* display: none; */
}
.productNavPhone li {
  display: inline;
}
.productNavPhone a {
  display: inline-block;
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-size: 0.9em;
  transition: all 1s;
}
.productNavPhone a:hover {
  text-decoration: underline;
}
.productNavPhone {
  display: none;
  padding-top: 10px;
}
@media screen and (max-width: 768px) {
  .productNav {
    display: none;
  }

  .productNavPhone {
    display: block;
    padding-left: 0;
    position: absolute;
    left: 10%;
  }
}
</style>
