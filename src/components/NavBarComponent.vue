<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-link-component :link="links.header.link" classLink="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
        />
      </nav-link-component>

      <nav-link-component
        v-for="link in links.other"
        :key="link.id"
        classLink="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
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
          icon: "Logo.svg",
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
