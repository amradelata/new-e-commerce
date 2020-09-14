<template>
  <div>
    <div class="shopnav">
      <ul class="ul">
        <nuxt-link to="/shoes">
          <li class="li darck">SHOES</li>
        </nuxt-link>
        <nuxt-link to="/tShirt">
          <li class="li lightdarck">T-SHIRT</li>
        </nuxt-link>
        <nuxt-link to="/jacket">
          <li class="li darck">JACKET</li>
        </nuxt-link>
        <nuxt-link to="/suit">
          <li class="li lightdarck">SUIT</li>
        </nuxt-link>
        <nuxt-link to="/blazer">
          <li class="li darck">BLAZER</li>
        </nuxt-link>
        <nuxt-link to="/pants">
          <li class="li lightdarck">PANTES</li>
        </nuxt-link>
        <nuxt-link to="/coat">
          <li class="li darck">COAT</li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.shopnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 80%;
  /* z-index: -1; */
}
.ul {
  text-align: center;
  list-style: none;
  padding-top: 53px;
  margin-right: 10px;
}
.li {
  padding: 20px 0;
  width: 100%;
  font-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-top: 3px;

  cursor: pointer;
}
.shopnav li {
  color: #fff;
}
.shopnav a {
  text-decoration: none;
}
.darck {
  background: #10ac84;
}
.lightdarck {
  background: #1dd1a1;
}
@media screen and (max-width: 768px) {
  .shopnav {
    display: none;
  }
}
</style>