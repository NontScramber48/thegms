<template>
  <div class="two-panel-layout">
    <nav class="navbar xl:flex 2xl:flex 3xl:flex md:flex hidden">
      <div class="flex-1"></div>
      <div class="flex-2">
        <div class="logo-container flex items-center justify-center">
          <img alt="Vue logo" src="@/assets/gms.png" class="logo-image" />
          <div class="logo">Global Manpower Services (SO)</div>
        </div>
      </div>  
      <div class="flex-1 flex justify-end">
       
        
      </div>
      <div class="language-switch  items-right" @click="toggleLanguage">
          <InputSwitch
            v-model="checked"
            @change="toggleLanguage"
            class=" "
          />
          <span class="ml-3">{{ getTranslatedText("language") }}</span>
        </div>
    </nav>
    <div class="  xl:flex 2xl:flex 3xl:flex md:flex hidden">
      <div
        class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round text-white"
      >
      <router-link to="/home" class="link-style"> {{getTranslatedText("home")}} </router-link>
      </div>
      <div
        class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round text-white"
      >
        <router-link to="/about" class="link-style"> {{getTranslatedText("about")}} </router-link>
      </div>
      <div
        class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round"
      >
        <router-link to="machines" class="link-style"> {{getTranslatedText("ourcust")}} </router-link>
      </div>
      <div
        class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round"
      >
        <router-link to="/about" class="link-style"> {{getTranslatedText("service")}} </router-link>
      </div>
      <div
        class="flex-1 flex align-items-center justify-content-center font-bold m-2 px-5 py-3 border-round"
      >
        <router-link to="/contacts" class="link-style"> {{getTranslatedText("contact")}} </router-link>
      </div>
    </div>

    <nav class="navbar-mobile xl:hidden 2xl:hidden 3xl:hidden md:hidden flex">
      <div class="logo-container">
        <img alt="Vue logo" src="@/assets/gms.png" class="logo-image" />
        <div class="logo">Global Manpower Services</div>
      </div>

      <div class="icon" @click="toggleNav">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="nav-links" :class="{ 'show-mobile-menu': isMobileMenuOpen }">
        <div class="  xl:flex 2xl:flex 3xl:flex md:flex flex text-white">
      <div
        class="flex-2  "
      >
        <router-link to="/home" class="link-style text-white px-2 py-2"> {{getTranslatedText('home')}} </router-link>
      </div>
      <div
        class="flex-2  "
      >
        <router-link to="/about" class="link-style text-white px-2 py-2"> {{getTranslatedText('about')}}</router-link>
      </div>
      <div
        class="flex-2  "
      >
        <router-link to="machines" class="link-style text-white px-2 py-2">  {{getTranslatedText("ourcust")}}</router-link>
      </div>
      <div
        class="flex-2  "
      >
        <router-link to="/contacts" class="link-style text-white px-2 py-2"> {{getTranslatedText('contact')}} </router-link>
      </div>
      <div
        class="flex-2 "
      >
        <router-link to="/about" class="link-style text-white px-2 py-2">  {{getTranslatedText('service')}}</router-link>
      </div>
    </div>
</div>


      <!-- Toggle button for language switch -->
      <!-- <button class="language-switch" @click="toggleLanguage">
      <i class="pi pi-globe" style="font-size: 1.5rem;"></i>
      <Badge value="{{ getTranslatedText('language') }}" class="p-ml-2" />
    </button> -->
    </nav>

    <div class="flex container mt-12 xl:hidden 2xl:hidden 3xl:hidden md:hidden ">
      <div class="flex-5"></div>
      <div class="flex-1"></div>
      <div class="flex-5">   <div class="language-switch  items-right pt-4" @click="toggleLanguage">
          <InputSwitch
            v-model="checked"
            @change="toggleLanguage"
            class=" "
          />
          <span class="ml-3">{{ getTranslatedText("language") }}</span>
        </div></div>
    </div>
  </div>

  
</template>

<script setup>
import { ref, onMounted } from "vue";
import InputSwitch from "primevue/inputswitch";

const switchState = ref(false);


const myObject = ref({
  src: "/src/assets/us-flag.png",
  language: "ENG",
  title: "Welcome to GMS",
  home:"Home",
    about :"About",
    ourcust:"Our customer",
    contact:"Contact",
    service:"service",
  description:
    "Elevate your workforce with Global Manpower Services – Laos' top solutions provider. Bridging the gap between skilled individuals and top-tier talent-seeking organizations, we are dedicated to facilitating growth and success for employers and job seekers alike.",
});

const languages = {
  en: myObject.value,
  th: {
    src: "/src/assets/thai-flag.png",
    language: "LAOS",
    title: "ຍິນດີຕອນຮັບ GMS",
    home :"ໜ້າຫຼັກ",
    about :"ກ່ຽວກັບ",
    ourcust:"ລູກຄ້າຂອງພວກເຮົາ",
    contact:"ຕິດຕໍ່",
    service:"ການບໍລິການ",
    description:
      "ຂະຫນາຍທີ່ດີຈາກການບໍລິການຂໍ້ມູນບັນດາຂອງທ່ານກໍ້ມູນຜ່ານການບໍລິການຂອງ Global Manpower Services - ຜູ້ບໍລິການການປະກາດທີ່ຍອມຮັບມາສະໜັກໄດ້ໃນລາວ, ການເຊື່ອຍຸດຕິບັນຊີປະເພດວິນາທີ່ມີຄວາມຄຸນຄ່າ ແລະ ອົງການທີ່ກໍານົດອື່ນໆຈາກການມີຄວາມປະຖິຍາທີ່ດີກວດກາຂອງທ່ານ, ເວັບຕ່າງໆທີ່ສາກົນເວັບນ້ອຍກັບການຄຸ້ມຄອງຂອງພວກເຮົາລະບົບນີ້.",
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
  location.reload();
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
    width: 100%;
    text-align: left;
    background-color: #333;
    color:white;
    z-index: 1;
    position: absolute;
    top: 70px;
left:-10px;
    margin: 12px;
  height: 50px;
  }

  .nav-links.show-mobile-menu {
    display: flex;
  }

  .nav-links li {
  margin: 0;
}

.nav-links li a {
  text-decoration: none;
  color: white; /* Add this line to set the link color */
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
