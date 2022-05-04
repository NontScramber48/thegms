<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tired-menu></pv-tired-menu>
  <pv-layout-main>
    <h1>PROFILE</h1>
  </pv-layout-main>
</template>

<script>
import pvTiredMenu from "../../components/pv-tired-menu.vue";
import pvMenuBar from "../../components/pv-menu-bar.vue";
import pvLayoutMain from "../../components/pv-layout-main.vue";

export default {
  name: "profile-view.component",
  components: {
    pvMenuBar,
    pvTiredMenu,
    pvLayoutMain,
  },
};
</script>

<style scoped>

</style>
