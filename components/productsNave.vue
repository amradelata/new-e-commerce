<template>
  <div>
    <div class="shopnav">
      <ul class="ul">
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/SHOES.svg" />
          </span>
          <nuxt-link to="/shoes">
            <li class="li lightdarck">SHOES</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/T-SHIRT.svg" />
          </span>
          <nuxt-link to="/tShirt">
            <li class="li lightdarck">T-SHIRT</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/SHIRT.svg" />
          </span>
          <nuxt-link to="/Shirt">
            <li class="li lightdarck">SHIRT</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/JACKET.svg" />
          </span>
          <nuxt-link to="/jacket">
            <li class="li lightdarck">JACKET</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/SUIT.svg" />
          </span>
          <nuxt-link to="/suit">
            <li class="li lightdarck">SUIT</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/BLAZER.svg" />
          </span>
          <nuxt-link to="/blazer">
            <li class="li lightdarck">BLAZER</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/PANTS.svg" />
          </span>

          <nuxt-link to="/pants">
            <li class="li lightdarck">PANTS</li>
          </nuxt-link>
        </div>
        <!--  -->
        <!--  -->
        <div class="inner">
          <span>
            <img class="svg" src="~/assets/img/svg/COAT.svg" />
          </span>

          <nuxt-link to="/coat">
            <li class="li lightdarck">COAT</li>
          </nuxt-link>
        </div>
        <!--  -->
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
  top: 53px;
  right: 0;
  left: 80%;
  /* z-index: -1; */
}
.ul {
  text-align: center;
  list-style: none;
  /* padding-top: 53px; */
  margin-right: 10px;
}
.li {
  padding: 18px 0;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* margin-top: 3px; */

  cursor: pointer;
}
.shopnav li {
  color: #000;
  background: #dff9fb;
}
.shopnav a {
  text-decoration: none;
}
.inner {
  padding: 5px;
  transition: all 0.5s ease-in-out;
}
.inner:hover {
  clip-path: circle(100%);
}

.inner:hover span {
  color: rgba(255, 255, 255, 0);
}
span {
  float: right;
  position: relative;

  line-height: 50px;
}
.svg {
  height: 50px;
  width: 50px;
}
/* dell */
@media screen and (min-width: 1408px) {
  .inner {
    clip-path: circle(20% at 90% 50%);
  }
}
/* laptop */
@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .inner {
    clip-path: circle(25% at 94% 50%);
  }
}
/* taplet */
@media screen and (min-width: 769px) and (max-width: 1215px) {
  .inner {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .shopnav {
    display: none;
  }
}
</style>