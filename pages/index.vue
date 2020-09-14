<template>
  <div>
    <!-- hero -->
    <div class="myhero">
      <div class="herosections">
        <div class="mycontent">
          <h1>First Shop Online</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas minus amet assumenda fuga vero nam.</p>
          <button>Get Started</button>
          <button>Sign in</button>
        </div>
      </div>
      <div class="herosections">
        <img src="~/assets/img/svg/86--Online shopping.svg" alt="heroimg" />
      </div>
    </div>
    <!-- hero -->
    <!-- whatweoferr -->
    <section>
      <!-- <h1 class="mytitle">What We Oferr</h1> -->
      <div class="whatweoferr">
        <div class="myoferr">
          <img src="~/assets/img/svg/cut.png" />
          <p>Lorem ipsum dolor sit amet consectetur .</p>
        </div>
        <div class="myoferr">
          <img src="~/assets/img/svg/short.png" />
          <p>Lorem ipsum dolor sit amet consectetur .</p>
        </div>
        <div class="myoferr">
          <img src="~/assets/img/svg/t-shirt.png" />
          <p>Lorem ipsum dolor sit amet consectetur .</p>
        </div>
      </div>
    </section>
    <!-- whatweoferr -->
    <!-- our team -->
    <section>
      <div class="ourteam">
        <div class="teammate">
          <img src="~/assets/img/svg/user.png" />
          <h3>Name-Name</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum nulla nemo est? Nobis fuga aspernatur minima, deserunt molestiae facilis ipsum.</p>
        </div>
        <div class="teammate">
          <img src="~/assets/img/svg/user.png" />
          <h3>Name-Name</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum nulla nemo est? Nobis fuga aspernatur minima, deserunt molestiae facilis ipsum.</p>
        </div>
        <div class="teammate">
          <img src="~/assets/img/svg/user.png" />
          <h3>Name-Name</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum nulla nemo est? Nobis fuga aspernatur minima, deserunt molestiae facilis ipsum.</p>
        </div>
        <div class="teammate">
          <img src="~/assets/img/svg/user.png" />
          <h3>Name-Name</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab earum nulla nemo est? Nobis fuga aspernatur minima, deserunt molestiae facilis ipsum.</p>
        </div>
      </div>
    </section>
    <!-- our team -->
    <!-- footer -->
    <div>
      <div class="ourlocation">
        <div class="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33830.15150780818!2d31.764652648471817!3d30.01899812358391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31a5a2fb69f5cde4!2sThe%20New%20Administrative%20Capital&#39;s%20Heliport!5e0!3m2!1sen!2seg!4v1599746766180!5m2!1sen!2seg"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="location">
          <h2>contact us</h2>
          <div class="inputs">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="subject" />
            <textarea placeholder="your message "></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
/* hero */
.myhero {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 95vh;
  align-items: center;
  padding: 0 100px;
}

.herosections img {
  width: 50vw;
}
.herosections .mycontent h1 {
  font-size: 60px;
  font-weight: lighter;
}
.herosections .mycontent p {
  font-size: 30px;
}
.herosections .mycontent button {
  margin-top: 35px;
  padding: 10px 30px;
  cursor: pointer;
  border: none;
  background: #00b894;
  color: aliceblue;
  font-size: 20px;
}
.mytitle {
  text-align: center;
}

/*  whatweoferr*/
.whatweoferr {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100vh;
  padding: 0 100px;
  align-items: center;
}

.myoferr {
  /* background-image: url("~/assets/img/svg/shap.png"); */
  background-image: url("../assets/img/svg/shap.png");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 100px;
  margin-right: 10px;
  /* height: 200px;   */
  text-align: center;
}
.myoferr p {
  font-weight: bold;
}
/* ourteam */
.ourteam {
  display: flex;
  flex-flow: row;
  /* width: 33%; */
  justify-items: center;
  justify-content: space-around;
  padding: 0 100px;
  height: 100vh;
  align-items: center;
}
.teammate {
  margin: 0 20px;
  /* height: 200px;   */
  text-align: center;
  /* background: salmon; */
}
.teammate img {
  width: 150px;
}
/* ourlocation */
.ourlocation {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.location {
  text-align: center;
  color: aliceblue;
}
.location iframe,
.location {
  background: #6c63ff;
  width: 50vw;
  height: 500px;
}

.inputs {
  display: flex;
  flex-flow: column;
  padding: 0 50px;
}

.inputs input {
  margin: 20px 0;
}
.inputs textarea {
  height: 150px;
  margin-bottom: 10px;
}
.inputs button {
  padding: 10px;
  cursor: pointer;
  color: #000;
}
.inputs input,
.inputs textarea,
.inputs button {
  background-color: #fff;
  outline: none;
  padding: 5px;
  border-radius: 5px;
}
@media screen and (max-width: 768px) {
  .myhero,
  .whatweoferr,
  .ourteam {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    height: 100vh;
    padding: 35px;
  }

  .mycontent {
    text-align: center;
  }

  .ourlocation {
    display: flex;
    flex-flow: column nowrap;
    margin-top: 125%;
  }
  .location iframe,
  .location {
    width: 100vw;
  }
  .ourteam {
    margin-top: 100%;
  }

  .mynav ul,
  .myfooter ul {
    display: block;
    text-align: center;
  }

  .mynav li,
  .myfooter li {
    margin-right: 0;
    margin: 10px 0;
  }

  .myfooter ul {
    /* display: none; */
  }
}
</style>