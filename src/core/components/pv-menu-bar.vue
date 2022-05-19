<template>

    <pv-menubar :model="items" class=" flex justify-content-between">
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="mr-5"
        />

      </template>
      <template #end>
        <pv-input-text placeholder="Search" type="text" />
      </template>
    </pv-menubar>

</template>

<script>
export default {
  name: "pv-menu-bar",
  data() {
    return {
      checked: false,
      items: [
        {
          label: "Notifications",
          icon: "pi pi-fw pi-bell",
          to:"/notifications",

        },
        {
          label: "Profile",
          icon: "pi pi-fw pi-user",
          to:"/profile",
        }
      ],
    };
  },

};
</script>

<style scoped>

</style>