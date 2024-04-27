<script setup>
import navComp from './components/navbar/navbar.vue'
import { ref } from "vue";

const currentYear = ref(new Date().getFullYear())
</script>

<template>
<section class="py-[48px] bg-gray-200">
  <h1 class="mb-2 text-center text-5xl text-gray-700 font-poppins font-bold">
    HideMyChat
  </h1>
  <navComp/>
  <router-view></router-view>
</section>
<footer id="footer" class="bg-white pt-4 lg:mb-0 mb-2">
    <div class="container mx-auto">
        <div class="flex justify-center container mx-auto w-full">
          <p class="pb-2 lg:pb-0 font-medium font-myFont text-xs lg:text-sm text-gray-700 text-center">
            Made by <a href="https://www.instagram.com/fauzanmi18/" target="_blank" class="underline hover:text-blue-800">Fauzan Muhammad Iqbal</a>, 
            © {{ currentYear }}
          </p>
          <!-- <p class="font-bold text-sm text-black text-center">
              Made By <span><a href="https://www.instagram.com/fauzanmi18/" class="hover:text-white">Fauzan Muhammad Iqbal</a></span>, Bandung 2023
          </p> -->
        </div>
    </div>
</footer>
</template>