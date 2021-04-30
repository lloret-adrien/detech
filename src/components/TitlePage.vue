<template>
  <div class="title-page">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.title-page {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  h1 {
    font-size: 48px;
  }
  h3 {
    color: #a69e9e;
    font-weight: 1;
  }
}
</style>
