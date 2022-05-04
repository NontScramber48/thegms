<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tired-menu></pv-tired-menu>
  <div class="layout-main-container">
    <div class="layout-main">
      <h1>THIS IS MY FINANCES</h1>
    </div>
  </div>
</template>

<script>
import pvMenuBar from "../../components/pv-menu-bar.vue";
import pvTiredMenu from "../../components/pv-tired-menu.vue";
export default {
  name: "finance-list.component",
  components:{
    pvMenuBar,
    pvTiredMenu
  },
};
</script>

<style scoped>
.layout-main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left:300px;
  justify-content: space-between;
  padding: 7rem 2rem 2rem 4rem;
}

.layout-main {
  flex: 1 1 auto;
  clear: both;
  position: relative;
}
</style>