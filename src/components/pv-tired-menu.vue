<template>
  <div class="layout-sidebar align-content-center">
    <tired-menu :model="items" class="bg-blue-850 block"></tired-menu>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "pv-tired-menu",
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/home",
        },
        {
          label: "Inventory",
          icon: "pi pi-fw pi-pencil",
          to: "/inventory",
        },
        {
          label: "Contacts",
          icon: "pi pi-fw pi-user",
          to: "/contacts",
        },
        {
          label: "Machines",
          icon: "pi pi-fw pi-calendar",
          to: "/machines",
        },
        {
          label: "Finances",
          icon: "pi pi-fw pi-calendar",
          to: "/finances",
        },
        {
          separator: true,
        },
        {
          label: "Logout",
          icon: "pi pi-fw pi-power-off",
          to: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.layout-sidebar {
  position: absolute;
  width: 250px;
  height: calc(100vh - 9rem);
  z-index: 999;
  overflow-y: auto;
  user-select: none;
  top: 7rem;
  left: 2rem;
  background-color: #2c3e50;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
    0px 1px 4px rgba(0, 0, 0, 0.08);
}
</style>
