<template>
  <div class="wrapper">
    <RouterView />
    <footer-component />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { HeroView, FooterComponent },
};
</script>

<style></style>
