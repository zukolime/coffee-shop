<template>
  <li :class="classLink">
    <RouterLink :to="link">{{ text }}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    classLink: {
      type: String,
      required: false,
    },
  },
};
</script>
