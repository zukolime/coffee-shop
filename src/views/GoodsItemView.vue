<template>
  <main>
    <div class="banner itempage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <header-title :text="title.text" />
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-1">
            <img
              class="shop__girl"
              src="img/coffee_item.jpg"
              alt="coffee_item"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country:</span>
              Brazil
            </div>
            <div class="shop__point">
              <span>Description:</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div class="shop__point">
              <span>Price:</span>
              <span class="shop__point-price">16.99$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <ul class="footer d-flex flex-wrap">
              <li class="footer__item">
                <a href="./index.html">
                  <img src="logo/Logo_black.svg" alt="logo" />
                </a>
              </li>
              <li class="footer__item">
                <a href="./coffeepage.html">Our coffee</a>
              </li>
              <li class="footer__item">
                <a href="./goodspage.html">For your pleasure</a>
              </li>
              <li class="footer__item">
                <a href="./contacts.html">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
        <img
          class="beanslogo"
          src="logo/Beans_logo_dark.svg"
          alt="Beans logo"
        />
      </div>
    </footer>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import HeaderTitle from "@/components/HeaderTitle.vue";

export default {
  components: { NavBarComponent, HeaderTitle },

  data() {
    return {
      title: {
        text: "Our Coffee",
      },
    };
  },
};
</script>
