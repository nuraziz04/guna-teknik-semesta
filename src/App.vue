<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar/>
    <HomeSection/>
    <AboutSection/>
    <ProductSection/>
    <CustomerSection/>
    <ContactSection/>
    <Footer/>
    <BackToTop/>
  </div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  //import components asynchronous
  const NavBar = defineAsyncComponent(()=>import('@/components/NavBar.vue'))
  const HomeSection = defineAsyncComponent(()=>import('@/components/HomeSection.vue'))
  const AboutSection = defineAsyncComponent(()=>import('@/components/AboutSection.vue'))
  const ProductSection = defineAsyncComponent(()=>import('@/components/ProductSection.vue'))
  const CustomerSection = defineAsyncComponent(()=>import('@/components/CustomerSection.vue'))
  const ContactSection = defineAsyncComponent(()=>import('@/components/ContactSection.vue'))
  const BackToTop = defineAsyncComponent(()=>import('@/components/BackToTop.vue'))
  const Footer = defineAsyncComponent(()=>import('@/components/FooterSection.vue'))
</script>