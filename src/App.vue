<template>
  <div class="bg-[#F8FAFC] dark:bg-[#111827] min-h-screen">
    <NavBar/>
    <HomeSection/>
    <AboutSection/>
    <ProductSection/>
    <BrandSection/>
    <CustomerSection/>
    <LegalitasSection/>
    <ContactSection/>
    <FilosofiSection/>
    <Footer/>
    <BackToTop/>
  </div>
</template>

<script setup>
  import { defineAsyncComponent, watch } from 'vue'
  import { useLocalStorage } from '@vueuse/core'
  //import components asynchronous
  const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'))
  const HomeSection = defineAsyncComponent(()=>import('@/components/HomeSection.vue'))
  const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'))
  const ProductSection = defineAsyncComponent(()=>import('@/components/ProductSection.vue'))
  const BrandSection = defineAsyncComponent(()=>import('@/components/BrandSection.vue'))
  const CustomerSection = defineAsyncComponent(()=>import('@/components/CustomerSection.vue'))
  const LegalitasSection = defineAsyncComponent(()=>import('@/components/LegalitasSection.vue'))
  const ContactSection = defineAsyncComponent(()=>import('@/components/ContactSection.vue'))
  const FilosofiSection = defineAsyncComponent(()=>import('@/components/FilosofiSection.vue'))
  const BackToTop = defineAsyncComponent(()=>import('@/components/BackToTop.vue'))
  const Footer = defineAsyncComponent(()=>import('@/components/FooterSection.vue'))

  // 🌗 global theme
  const theme = useLocalStorage("theme", "dark")

  watch(theme, (value) => {
    document.documentElement.classList.toggle("dark", value === "dark")
  }, { immediate: true })
</script>