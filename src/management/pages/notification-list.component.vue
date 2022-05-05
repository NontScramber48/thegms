<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tiered-menu></pv-tiered-menu>
  <pv-layout-main>
    <h1>THESE ARE MY NOTIFICATIONS</h1>
  </pv-layout-main>
</template>

<script>
import pvMenuBar from "../../components/pv-menu-bar.vue";
import pvTieredMenu from "../../components/pv-tiered-menu.vue";
import pvLayoutMain from "../../components/pv-layout-main.vue";
export default {
  name: "notification-list.component",
  components:{
    pvMenuBar,
    pvTieredMenu,
    pvLayoutMain,
  },
};
</script>

<style scoped>

</style>