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

  <div class="xl:flex 2xl:flex 3xl:flex md:flex hidden">
    <div class="flex-1 border-round px-4 py-4">
      <img alt="GMS Image" src="@/assets/hand.png" class="w-full h-6" />
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
import Carousel from "primevue/carousel";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Button from "primevue/button";
const visible = ref(false);
const cards = ref([
  {
    id: 1,
    src: "/src/assets/hand.png",
    title: "Job 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 2,
    src: "/src/assets/hand.png",
    title: "job 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 3,
    src: "/src/assets/hand.png",
    title: "job 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 4,
    src: "/src/assets/hand.png",
    title: "job 4",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 5,
    src: "/src/assets/hand.png",
    title: "job5",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 6,
    src: "/src/assets/hand.png",
    title: "job 6",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 7,
    src: "/src/assets/hand.png",
    title: "job 7",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 8,
    src: "/src/assets/hand.png",
    title: "job 8",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 9,
    src: "/src/assets/hand.png",
    title: "job 9",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  // Add more cards as needed
]);

const switchState = ref(false);
const products = ref(
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "10020",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  }
);
const responsiveOptions = ref([
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const myObject = ref({
  src: "/src/assets/us-flag.png",
  language: "ENG",
  title: "About Our activities",
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
.flex-container {
  display: flex;
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
