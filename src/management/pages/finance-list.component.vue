<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tired-menu></pv-tired-menu>
  <pv-layout-main>
    <h1>FINANCES</h1>
  </pv-layout-main>
</template>

<script>
import pvMenuBar from "../../components/pv-menu-bar.vue";
import pvTiredMenu from "../../components/pv-tired-menu.vue";
import pvLayoutMain from "../../components/pv-layout-main.vue";
export default {
  name: "finance-list.component",
  components:{
    pvMenuBar,
    pvTiredMenu,
    pvLayoutMain,
  },
};
</script>

<style scoped>

</style>