<template>
  <pv-menu-bar></pv-menu-bar>

  <h1 class="text-center ">Contacts us</h1>
  <div class="xl:flex 2xl:flex 3xl:flex md:flex block">
    <div class="flex-1 border-round px-4 py-4 text-center">
      <i class="pi pi-mobile pb-4" style="font-size: 5rem; color: gray"> </i> <br />
      By PHONE
      <ul class="text-center pb-2">
        <a class="" href="https://wa.me/2054896465">
          Whatsapp: 020 5489 6465</a
        >
        <p class="mt-4">Tel: 020 5489 6465</p>
      </ul>
    </div>
    <div class="flex-1 border-round px-4 py-4 text-center">
      <i class="pi pi-map-marker pb-4" style="font-size: 5rem; color: gray"> </i>
      <br />

      By Address

      <ul class="text-center pb-2">
        <a class="" href=" https://maps.app.goo.gl/LRb144WJK5JC4vBe8">
          Global Manpower Services Laos , vientain</a
        >
      </ul>
    </div>
    <div class="flex-1 border-round px-4 py-4 text-center">
      <i class="pi pi-globe pb-4" style="font-size: 5rem; color: gray "> </i>
      <br />
      Social network
      <ul class="text-center pb-2">
        <a
          class=""
          href=" https://www.facebook.com/profile.php?id=61554872746687"
        >
          Global Manpower Services</a
        >
        <p>gmss@outlook.co.th</p>
      </ul>

      <!-- <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap> -->
    </div>
  </div>
  <!-- <div class="xl:hidden 2xl:hidden 3xl:hidden md:hidden flex">
    mobile
    <div class="flex-1  border-round px-4 py-4">
      <img alt="GMS Image" src="@/assets/hand.png" class="w-full h-96">
    </div>
    <div class="flex-4  border-round"></div>
    <div class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round">
      <div class="welcome-content">
        <h1>{{ getTranslatedText('title') }}</h1>
        <p>{{ getTranslatedText('description') }}</p>
      </div>
    </div>
  </div> -->

</template>

<script setup>
import { ref, onMounted } from "vue";
import InputSwitch from "primevue/inputswitch";
import pvMenuBar from "/src/core/components/pv-menu-bar.vue";
import { GoogleMap, Marker } from "vue3-google-map";
const switchState = ref(false);
const center = { lat: 40.689247, lng: -74.044502 };
const myObject = ref({
  src: "/src/assets/us-flag.png",
  language: "ENG",
  title: "Our customersnkjbkbhjkvi",
  description:
    "Welcome to the About Us page of Global Manpower Services. We are dedicated to providing top-tier workforce solutions, bridging the gap between skilled individuals and organizations seeking the best talent. Our commitment is to facilitate growth and success for both employers and job seekers.",
});

const languages = {
  en: myObject.value,
  th: {
    src: "/src/assets/thai-flag.png",
    language: "LAOS",
    title: "ຍິນດີຕອນຮັບ GMS",
    description:
      "ຍິນດີເປັນໜ້າ 'About Us' ຂອງ Global Manpower Services. ພວກເຮົາມີຄວາມທີ່ສົມກັບການສະແດງການບໍລິການມັດຈຳ, ການຕັ້ງລູກຄ້າທີ່ມີຄວາມຄຸນຄ່າ ແລະ ອົງການທີ່ກໍານົດອື່ນໆ. ຄວາມຈຳເປັນແລະມີຄວາມປະຖິຍາທີ່ດີແກ່ບໍລິການການຫຼີ້ນຄົນທີ່ພວກເຮົາຍັງຢູ່.",
  },
};

let currentLanguage = ref(localStorage.language || "en");
const isMobileMenuOpen = ref(false);

const toggleNav = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const checked = ref(currentLanguage.value === "th");

const toggleLanguage = () => {
  // Toggle the language based on the switch state
  currentLanguage.value = checked.value ? "th" : "en";
  localStorage.language = currentLanguage.value;
};

const getTranslatedText = (key) => {
  // Implement your translation logic here
  return languages[currentLanguage.value][key];
};

onMounted(() => {
  // Additional logic to handle language on mount if needed
});
</script>

<style scoped>
.link-style {
  text-decoration: none;
  color: black;
}

/* Navbar styles */
.navbar {
  background-color: #333;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.logo {
  font-size: 1.6em;
  font-weight: bold;
}

.language-switch {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
}

.nav-links {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.nav-links li {
  margin: 10px 0;
}

.nav-links li a {
  text-decoration: none;
  color: black;
}

.language-switch button {
  cursor: pointer;
  background: none;
  border: none;
  color: white;
}

.icon {
  display: none;
  cursor: pointer;
}

.icon div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

/* Add this style to position details (links and icon) below the image and name */
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px; /* Adjust the margin as needed */
}

/* Mobile Styles */
@media only screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 20%;
    text-align: left;
    background-color: #333;
    z-index: 1;
    position: absolute;
    top: 70px;
    left: 400px;
    margin: 12px;
  }

  .nav-links.show-mobile-menu {
    display: flex;
  }

  .nav-links li {
    margin: 0;
  }

  .navbar-mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 15px;
  }

  .icon {
    display: block;
  }

  .responsive .icon div:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .responsive .icon div:nth-child(2) {
    opacity: 0;
  }

  .responsive .icon div:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>
