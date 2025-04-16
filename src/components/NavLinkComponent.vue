<template>
  <li :class="classLink">
    <RouterLink :to="link">{{ text }}<slot></slot></RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    classLink: {
      type: String,
      required: true,
    },
  },
};
</script>
