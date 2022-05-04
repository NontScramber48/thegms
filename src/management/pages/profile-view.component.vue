<template>
  <pv-menu-bar></pv-menu-bar>

  <main>
    <h1>This is my profile</h1>
  </main>
</template>

<script>
import pvMenuBar from "../../components/pv-menu-bar.vue";

export default {
  name: "profile-view.component",
  components:{
    pvMenuBar
  },
};
</script>

<style scoped>

</style>