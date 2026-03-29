<template>
  <section class="text-white mt-10 scroll-mt-24" id="customers" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-left mb-4 px-4 xl:pl-16">
      Customers
    </h2>
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in customers" :key="element.id">
            <div class="carousel__item p-4">
                <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-6 text-white font-light mb-6">
                    <!-- Image Center -->
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
        itemsToShow: 1,
        itemsToScroll: 1,
        snapAlign: "start",
        wrapAround: false,
        clamp: true,
        transition: 300,
        mouseDrag: true,
        touchDrag: true
    })

    const breakpoints = ref({
        640: {
            itemsToShow: 1
        },
        768: {
            itemsToShow: 2
        },
        1024: {
            itemsToShow: 3
        }
    })

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

    .carousel {
    touch-action: pan-y;
    }

    .carousel__viewport {
    overflow-x: hidden;
    }
</style>