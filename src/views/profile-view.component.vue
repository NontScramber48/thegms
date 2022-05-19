<template>
  <pv-menu-bar></pv-menu-bar>
  <pv-tiered-menu></pv-tiered-menu>
  <pv-layout-main>
    <pv-avatar  icon=" pi pi-user" class="mr-2 mb-3" size="large" style="background-color:#1088e8">
    </pv-avatar>

    <div class="surface-section">
      <div class="font-medium text-3xl text-900 mb-3">My Profile </div>
      <div class="text-500 mb-5">Pack Premium</div>
      <ul class="list-none p-0 m-0">
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Name</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Jorge Sanchez</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Preferences</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
            <pv-chip label="Polycotton" class="mr-2"></pv-chip>
            <pv-chip label="Carding" class="mr-2"></pv-chip>
            <pv-chip label="Damask"></pv-chip>
          </div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Phone</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">93331669</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">Country</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">Peru</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
          </div>
        </li>
        <li class="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
          <div class="text-500 w-6 md:w-2 font-medium">About</div>
          <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
            We are a country of artisans and a country of manufacturing. I think Japanese textile technology is the best in the world.</div>
          <div class="w-6 md:w-2 flex justify-content-end">
            <pv-button label="Edit" icon="pi pi-pencil" class="p-button-text"></pv-button>
          </div>
        </li>
      </ul>
    </div>
  </pv-layout-main>
</template>

<script>
import pvMenuBar from "../core/components/pv-menu-bar.vue";
import pvTieredMenu from "../core/components/pv-tiered-menu.vue";
import pvLayoutMain from "../core/components/pv-layout-main.vue";
export default {
  name: "profile-view.component",
  components: {
    pvMenuBar,
    pvTieredMenu,
    pvLayoutMain,
  },

};
</script>

<style scoped>


</style>