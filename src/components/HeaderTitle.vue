<template>
  <h1 class="title-big">{{ text }}</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
