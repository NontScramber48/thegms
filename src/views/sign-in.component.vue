<template>
<pv-menu-bar></pv-menu-bar>
<h1 class="ml-6">{{getTranslatedText('recomened')}}</h1>
  <div class="card mx-4">
    <Carousel
      :value="cards"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
       :autoplayInterval="4000"
    >
      <template #item="slotProps">
       
        <div
          class="border-1 surface-border border-round  text-center py-5 px-3"
        >
          <div class="mb-3">
            <!-- <img
              alt="GMS Image"
              :src="slotProps.data.src"
              class="w-full h-96"
            /> -->
          </div>
          <div>
            <p class="mb-1 text-xl">{{ langcheck(slotProps.data) }}</p>
            <!-- <h6 class="mt-0 mb-3">about job</h6> -->
            <div class="mt-5 flex flex-col gap-2 items-center mx-auto">
    <Button
      icon="pi pi-send"
      rounded
      :label="getTranslatedText('apply')"
      severity="success"
      style="background-color: #349d4a; color: white"
      size="small"
      class="text-sm md:text-base flex-1"
    />

    <Button
      icon="pi pi-info-circle"
      :label="getTranslatedText('detail')"
      severity="danger"
      style="background-color: #ff9900; color: white"
      size="small"
      class="text-sm md:text-base flex-1"
      @click="applyJob(slotProps.data.link)"
    />
  </div>
          </div>
          
        </div>
        
      </template>
    </Carousel>
  </div>

  

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
import Carousel from "primevue/carousel";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Button from "primevue/button";
const visible = ref(false);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '375px',
        numVisible: 1,
        numScroll: 1
    }
    ,{
        breakpoint: '320px',
        numVisible: 1,
        numScroll: 1
    }
]);

const cards = ref([
  {
    id: 1,
    link: "https://docs.google.com/document/d/1oaL0DYLbfzQGu1W7Sx5T46vdWkmk7-o7LR1KH6Sf1KM/edit?usp=sharing",
    
    pdfurl: "/src/assets/pdf/kfcengpdf.pdf",
    src: "@/assets/hand.png",
    title:  "ປະກາດຮັບສະຫມັກພະນັການ ໄປເຮັດວຽກຢູ່ ປະເທດໄທ ຮ້ານ  KFC ",
    titleeng:'Job from KFC Thailand',
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    jobDes: {
      Salary: 30000,
      description:
        "Hongsa power co.ltd Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      location: "Hongsa ,laos ",
    },
  },
  {
    id: 1,
    link: "https://docs.google.com/document/d/1K05Y4z9cpcFnBdn-hr_9JMIM2Xbna2UtrgqNM84spfs/edit?usp=sharing",
    
    pdfurl: "/src/assets/pdf/kfcengpdf.pdf",
    src: "@/assets/hand.png",
    title:  "ປະກາດຮັບສະໝັກພະນັກງານ ຕຳແໜ່ງ ພະນັກງານ ຈັດລຽງສິນຄ້າ",
    titleeng:'Product Sorting Employee! Join our team !!! ',
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
    pdfurl: "/src/assets/pdf/kfcengpdf.pdf",
    link: "https://docs.google.com/document/d/11feQ0VBWzI39rVJIXzIN3LbHo_pw9iHNQ2JjX3RsGFA/edit?usp=sharing",

    pdfurl: "/src/assets/pdf/kfcengpdf.pdf",
    src: "@/assets/hand.png",
    title:  " PTT ປະກາດ ຕ້ອງການຮັບສະຫມັກ ພະນັກງານ ຂາຍນຳ້ມັນ!!",
    titleeng:'PTT Sorting Employee! Join our team !!! ',
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

const myObject = ref({
  src: "/src/assets/us-flag.png",
  language: "ENG",
  title: "Welcome to GMSS",
  recomened:"Recomend job",

  apply:"Apply job",
  detail:"Details",
  description:
    "Elevate your workforce with Global Manpower Services – Laos' top solutions provider. Bridging the gap between skilled individuals and top-tier talent-seeking organizations, we are dedicated to facilitating growth and success for employers and job seekers alike.",
});

const languages = {
  en: myObject.value,
  th: {
    src: "/src/assets/thai-flag.png",
    language: "LAOS",
    recomened:"ວຽກທີ່ແນະນໍາ",
    title: "ຍິນດີຕອນຮັບ GMS",
    apply:"ສະຫມັກ",
    detail:"ລາຍລະອຽດ",
    description:
      "ຂະຫນາຍທີ່ດີຈາກການບໍລິການຂໍ້ມູນບັນດາຂອງທ່ານກໍ້ມູນຜ່ານການບໍລິການຂອງ Global Manpower Services - ຜູ້ບໍລິການການປະກາດທີ່ຍອມຮັບມາສະໜັກໄດ້ໃນລາວ, ການເຊື່ອຍຸດຕິບັນຊີປະເພດວິນາທີ່ມີຄວາມຄຸນຄ່າ ແລະ ອົງການທີ່ກໍານົດອື່ນໆຈາກການມີຄວາມປະຖິຍາທີ່ດີກວດກາຂອງທ່ານ, ເວັບຕ່າງໆທີ່ສາກົນເວັບນ້ອຍກັບການຄຸ້ມຄອງຂອງພວກເຮົາລະບົບນີ້.",
  },
};
const langcheck = (data) => {
  console.log(data)
  console.log(localStorage.language)
  if (localStorage.language == "en") {
   data =  data.titleeng
  } else {
    data =  data.title
  }
  return data

};
let currentLanguage = ref(localStorage.language || "th");
const isMobileMenuOpen = ref(false);
const  applyJob = (data) => {
      // Redirect to the specified link
      console.log(data);
      window.location.href = data;
    }
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
