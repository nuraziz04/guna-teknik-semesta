<template>
  <section class="text-white mt-10 scroll-mt-24" id="customers" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-left mb-4 px-4 xl:pl-16">
      Customers
    </h2>
    <div class="px-4 xl:px-16">
        <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="1"
        :space-between="16"
        :loop="true"
        :speed="500"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        navigation
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        >
            <SwiperSlide v-for="element in customers" :key="'customer-' + element.id">
            <div class="p-4">
                <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 text-white font-light mb-6 rounded-xl">
                
                <!-- Image -->
                <div class="w-full flex justify-center mb-6">
                    <div class="overflow-hidden w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                    <img 
                        :src="element.image" 
                        alt="partner logo"
                        loading="lazy"
                        class="w-full h-full object-contain p-2"
                    />
                    </div>
                </div>

                <!-- Comment -->
                <div class="w-full text-center">
                    <p class="text-sm leading-relaxed">
                    {{ element.comment }}
                    </p>
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
            image: '/customers/supreme.webp',
            comment: 'PT Supreme Paper Solution'
        },
        {
            id: 2,
            image: '/customers/gbh.png',
            comment: 'PT Graha Bumi Hijau'
        },
        {
            id: 3,
            image: '/customers/morinaga.jpeg',
            comment: 'PT Kalbe Morinaga Indonesia'
        },
        {
            id: 4,
            image: '/customers/adw.jpeg',
            comment: 'PT Summit Adyawinsa Stamping Indonesia'
        },
        {
            id: 5,
            image: '/customers/bbraun.png',
            comment: 'PT B-Braun Indonesia'
        },
        {
            id: 6,
            image: '/customers/japfa.png',
            comment: 'PT Japfa Comfeed Indonesia'
        },
        {
            id: 7,
            image: '/customers/katalis.webp',
            comment: 'PT Katalis Sinergi'
        },
        {
            id: 8,
            image: '/customers/velasto.png',
            comment: 'PT Velasto Indonesia'
        },
        {
            id: 9,
            image: '/customers/kici.png',
            comment: 'PT Kotobukiya Indo Classic Industries'
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