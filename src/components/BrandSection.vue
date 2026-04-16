<template>
  <section class="text-white mt-5" id="customers" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-left mb-4 px-4 xl:pl-16">
      Supported Brands
    </h2>
    <div class="px-4 xl:px-16">
        <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="2"
        :space-between="16"
        :loop="true"
        :speed="500"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        navigation
        :breakpoints="{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }
        }"
        >
            <SwiperSlide
            v-for="element in customers"
            :key="'brand-' + element.id"
            >
                <div class="p-4">
                    <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 mb-6 rounded-xl flex justify-center items-center">
                    
                    <div class="overflow-hidden w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                        <img 
                        :src="element.image" 
                        alt="brand logo"
                        loading="lazy"
                        class="w-full h-full object-contain p-2"
                        />
                    </div>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  </section>
</template>

<script setup>
    import { ref } from 'vue';
    
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Navigation, Autoplay } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/navigation'


    const customers = ref([
        {
            id: 1,
            image: '/brand/parker.png'
        },
        {
            id: 2,
            image: '/brand/valqua.png'
        },
        {
            id: 3,
            image: '/brand/nok.jpg'
        },
        {
            id: 4,
            image: '/brand/smc.jpg'
        },
        {
            id: 5,
            image: '/brand/hallite.png'
        },
        {
            id: 6,
            image: '/brand/skf.png'
        }
        ,
        {
            id: 7,
            image: '/brand/bando.png'
        },
        {
            id: 8,
            image: '/brand/cho.webp'
        },
        {
            id: 9,
            image: '/brand/ntn.png'
        },
        {
            id: 10,
            image: '/brand/tto.png'
        }
    ])
</script>

<style>
    .swiper-button-prev,
    .swiper-button-next {
    color: #1f2937;
    transition: 0.3s;
    }

    .swiper-button-prev:hover,
    .swiper-button-next:hover {
    color: #f97316;
    }

    .dark .swiper-button-prev,
    .dark .swiper-button-next {
    color: #ffffff;
    }

    .dark .swiper-button-prev:hover,
    .dark .swiper-button-next:hover {
    color: #fb923c;
    }

    :root {
    --swiper-navigation-size: 20px;
    }
</style>