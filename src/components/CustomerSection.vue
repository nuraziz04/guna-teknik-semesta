<template>
  <section class="text-white mt-10 scroll-mt-24" id="customers" data-aos="zoom-in">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
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
        snapAlign: "center"
    })

    const breakpoints = ref({
        700:{
            itemsToShow: 2.5,
            snapAlign: 'center'
        },
        1024:{
            itemsToShow: 3,
            snapAlign: 'start'
        }
    })

    const customers = ref([
        {
            id: 1,
            image: 'src/assets/ahm.png',
            comment: 'PT Astra Honda Motor'
        },
        {
            id: 2,
            image: 'src/assets/gbh.png',
            comment: 'PT Graha Bumi Hijau'
        },
        {
            id: 3,
            image: 'src/assets/yamaha.png',
            comment: 'PT Yamaha Indonesia'
        },
        {
            id: 4,
            image: 'src/assets/adw.jpeg',
            comment: 'PT Summit Adyawinsa Stamping Indonesia'
        },
        {
            id: 5,
            image: 'src/assets/bbraun.png',
            comment: 'PT B-Braun Indonesia'
        },
        {
            id: 6,
            image: 'src/assets/ahm.png',
            comment: 'PT Astra Honda Motor'
        }
    ])
</script>

<style>
    .carousel__prev,.carousel__next {
        color: white !important;
    }
</style>