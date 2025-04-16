<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link-component
              :link="links.header.link"
              classLink="footer__item"
            >
              <img
                :src="require(`@/assets/logo/${links.header.icon}`)"
                :alt="links.header.icon"
              />
            </nav-link-component>

            <nav-link-component
              v-for="link in links.other"
              :key="link.id"
              classLink="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
</template>

<script>
import NavLinkComponent from "@/components/NavLinkComponent.vue";

import { v4 as uuidv4 } from "uuid";

export default {
  components: { NavLinkComponent },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          icon: "Logo_black.svg",
        },
        other: [
          {
            id: uuidv4(),
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: uuidv4(),
            text: "For your pleasure",
            link: "/for-your-pleasure",
          },
          {
            id: uuidv4(),
            text: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    };
  },
};
</script>
