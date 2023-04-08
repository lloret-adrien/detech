<template>
  <div class="topbar">
    <TitlePage :title="title" :subtitle="subtitle"></TitlePage>
    <Profile></Profile>
  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage.vue"
import Profile from "@/components/Profile.vue"

export default {
  name: "TopBar",
  components: {
    TitlePage,
    Profile,
  },
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
}
</script>

<style lang="scss">
.topbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #f0f0f0;
  top: 0px;
  position: sticky;
  z-index: 2;
  height: 130px;
}
</style>
