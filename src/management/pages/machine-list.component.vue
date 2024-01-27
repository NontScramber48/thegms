<template>
  <pv-menu-bar></pv-menu-bar>

  

  <div class="xl:flex 2xl:flex 3xl:flex md:flex hidden">
    <div class="flex-1 border-round px-4 py-4">
      <img alt="GMS Image" src="@/assets/hand.png" class="w-full h-96" />
    </div>
    <div class="flex-4 border-round"></div>
    <div
      class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round"
    >
      <div class="welcome-content">
        <h1>{{ getTranslatedText("title") }}</h1>
        <p>{{ getTranslatedText("description") }}</p>
      </div>
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
  <div class="block xl:hidden 2xl:hidden 3xl:hidden md:hidden">
    <!-- Show only on mobile devices -->
    <div class="flex-1 border-round px-4 py-4">
      <img alt="GMS Image" src="@/assets/hand.png" class="w-full h-96" />
    </div>
    <div class="flex-4 border-round"></div>
    <div
      class="flex-1 flex items-center justify-center font-bold m-2 px-5 py-3 border-round"
    >
      <div class="welcome-content text-center">
        <!-- Added 'text-center' class to center text on mobile -->
        <h1 class="text-2xl">{{ getTranslatedText("title") }}</h1>
        <p class="text-sm">{{ getTranslatedText("description") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import InputSwitch from "primevue/inputswitch";
import pvMenuBar from "/src/core/components/pv-menu-bar.vue"; 

const switchState = ref(false);

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
