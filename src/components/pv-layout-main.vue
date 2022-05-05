<template>
  <div class="layout-main-container">
    <div class="layout-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "pv-layout-main"
};
</script>

<style scoped>
.layout-main-container {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  margin-left:300px;
  justify-content: space-between;
  padding: 2rem 2rem 1rem 2rem;
}

.layout-main {
  flex: 1 1 auto;
  clear: both;
  position: relative;
}
</style>