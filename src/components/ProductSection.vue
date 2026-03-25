<template>
  <section class="text-white mt-20" id="product">
    <div class="px-4 xl:px-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Product</h2>
    </div>
    <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
        <div
            v-for="product in products"
            :key="product.id"
            data-aos="fade-up"
            class="px-8 py-10 rounded-xl 
            bg-gray-50 dark:bg-[#111a3e]
            shadow-md dark:shadow-lg
            border border-gray-200 dark:border-[#1f1641]
            flex flex-col items-center text-center transition duration-300 hover:scale-105"
        >
            <!-- ICON -->
            <div class="mb-4">
                <img 
                    :src="product.icon" 
                    alt="product icon"
                    class="w-20 h-20 sm:w-80 sm:h-24 object-contain"
                >
            </div>
            <!-- TITLE -->
            <h3 class="text-lg font-semibold uppercase text-transparent bg-clip-text 
            bg-gradient-to-r 
            from-orange-600 to-red-500
            dark:from-orange-900 dark:to-red-300
            lg:text-xl">
            {{ product.name }}
            </h3>
            <!-- DESCRIPTION -->
            <p class="mt-3 text-sm md:text-base 
            text-gray-600 dark:text-gray-400">
            {{ product.description }}
            </p>
        </div>
    </div>
  </section>
</template>

<script setup>
    import {ref} from 'vue'
    const products = ref([
        {
            id: 1,
            icon: new URL('@/assets/general-product.png', import.meta.url).href,
            name: 'GENERAL PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 2,
            icon: new URL('@/assets/rubber-product.png', import.meta.url).href,
            name: 'RUBBER PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 3,
            icon: new URL('@/assets/polyurethane-product.png', import.meta.url).href,
            name: 'POLYURETHANE PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 4,
            icon: new URL('@/assets/general-product.png', import.meta.url).href,
            name: 'GENERAL PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 5,
            icon: new URL('@/assets/rubber-product.png', import.meta.url).href,
            name: 'RUBBER PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 6,
            icon: new URL('@/assets/polyurethane-product.png', import.meta.url).href,
            name: 'POLYURETHANE PRODUCT',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ])
</script>