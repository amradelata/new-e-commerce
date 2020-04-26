<template>
  <div>
    <ul class="productNav">
      <nuxt-link to="/shoes">
        <li>Shoes</li>
      </nuxt-link>
      <nuxt-link to="/tShirt">
        <li>T-shirt</li>
      </nuxt-link>
      <nuxt-link to="/shirt">
        <li>Shirt</li>
      </nuxt-link>
      <nuxt-link to="/jacket">
        <li>Jacket</li>
      </nuxt-link>
      <nuxt-link to="/suit">
        <li>Suit</li>
      </nuxt-link>
      <nuxt-link to="/blazer">
        <li>Blazer</li>
      </nuxt-link>
      <nuxt-link to="/pants">
        <li>Pants</li>
      </nuxt-link>
      <nuxt-link to="/coat">
        <li>Coat</li>
      </nuxt-link>
    </ul>

    <!-- phone -->
    <ul class="productNavPhone">
      <nuxt-link to="/shoes">
        <li>Shoes</li>
      </nuxt-link>
      <nuxt-link to="/tShirt">
        <li>T-shirt</li>
      </nuxt-link>
      <nuxt-link to="/shirt">
        <li>Shirt</li>
      </nuxt-link>
      <nuxt-link to="/jacket">
        <li>Jacket</li>
      </nuxt-link>
      <nuxt-link to="/suit">
        <li>Suit</li>
      </nuxt-link>
      <nuxt-link to="/blazer">
        <li>Blazer</li>
      </nuxt-link>
      <nuxt-link to="/pants">
        <li>Pants</li>
      </nuxt-link>
      <nuxt-link to="/coat">
        <li>Coat</li>
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
  position: fixed;
  right: 0;
  left: 0;
  top: 70px;
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
  }
}
</style>
