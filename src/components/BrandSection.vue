<template>
  <section class="text-white mt-5" id="customers" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-left mb-4 px-4 xl:pl-16">
      Brands
    </h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in customers" :key="element.id">
            <div class="carousel__item p-4">
                <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 text-white font-light mb-6">
                    <!-- Image Center -->
                    <div class="w-full flex justify-center mb-4">
                        <div class="overflow-hidden w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                            <img 
                            :src="element.image" 
                            alt="partner logo" 
                            loading="lazy"
                            class="w-full h-full object-contain p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
        <template #addons>
            <Navigation/>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
    import { ref } from 'vue';
    import {Carousel, Navigation, Slide} from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const settings = ref({
        itemsToShow: 2,
        snapAlign: "start",
        wrapAround: true,
        transition: 500,
    })

    const breakpoints = ref({
        640: {
            itemsToShow: 2,
        },
        768: {
            itemsToShow: 3,
        },
        1024: {
            itemsToShow: 4,
        },
        1280: {
            itemsToShow: 5,
        }
    })

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
    .carousel__prev,
    .carousel__next {
    color: #1f2937 !important;
    transition: 0.3s;
    }

    .carousel__prev:hover,
    .carousel__next:hover {
    color: #f97316 !important;
    }

    .dark .carousel__prev,
    .dark .carousel__next {
    color: #ffffff !important;
    }

    .dark .carousel__prev:hover,
    .dark .carousel__next:hover {
    color: #fb923c !important;
    }
</style>