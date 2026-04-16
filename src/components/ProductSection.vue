<template>
    <section class="text-white mt-20" id="product">
        <div class="px-4 xl:px-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Product</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div
                v-for="product in products"
                :key="product.id"
                @click="openModal(product)"
                class="cursor-pointer px-8 py-10 rounded-xl 
                bg-gray-50 dark:bg-[#111a3e]
                shadow-md dark:shadow-lg
                border border-gray-200 dark:border-[#1f1641]
                flex flex-col items-center text-center transition duration-300 hover:scale-105"
            >
                <!-- ICON -->
                <div class="mb-4 w-50 h-50 flex items-center justify-center 
                            border border-gray-200 dark:border-[#2a2250] bg-white rounded-xl p-3">
                    <img 
                        :src="product.icon" 
                        alt="product icon"
                        class="w-full h-full object-contain"
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
                <p class="mt-3 text-xs lg:text-sm text-gray-700 dark:text-gray-300 mt-4 leading-snug">
                {{ product.description }}
                </p>
            </div>
        </div>
    </section>

    <!-- MODAL -->
    <div 
    v-if="isModalOpen"
    @click.self="closeModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
        <div class="bg-white dark:bg-[#111a3e] w-[90%] max-w-4xl rounded-xl p-6 relative">
            <!-- CLOSE BUTTON -->
            <button 
            @click="closeModal"
            class="absolute top-4 right-4 
            w-8 h-8 flex items-center justify-center 
            rounded-full bg-gray-200 dark:bg-[#1f1641]
            text-gray-800 dark:text-white"
            >
            ✕
            </button>
            <!-- TITLE -->
            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            {{ selectedProduct?.name }}
            </h2>
            <!-- LIST PRODUCT DETAIL -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                <div 
                    v-for="item in selectedProduct?.subProducts"
                    :key="item.name"
                    class="p-4 rounded-lg bg-gray-100 dark:bg-[#1f1641] text-center hover:scale-105 transition"
                >
                    <div class="w-24 h-24 mx-auto mb-2 flex items-center justify-center bg-white dark:bg-white rounded-lg">
                        <img 
                            :src="item.image"
                            class="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <p class="text-sm text-gray-700 dark:text-gray-300">
                    {{ item.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const isModalOpen = ref(false)
    const selectedProduct = ref(null)

    const openModal = (product) => {
        selectedProduct.value = product
        isModalOpen.value = true
    }

    const closeModal = () => {
    isModalOpen.value = false
    }

    const products = ref([
        {
            id: 1,
            icon: new URL('@/assets/products/Rubber&Polyurethane/rubber - oil seal.jpg', import.meta.url).href,
            name: 'Rubber & Polyurethane',
            description: 'Rubber & Polyurethane ada beberapa jenis, dan disetiap jenisnya memiliki keunggulan masing-masing, misalnya tahan panas, minyak / oli, gesekan dll',

            subProducts: [
                {
                    name: 'Seal - Polyurethane',
                    image: new URL('@/assets/products/Rubber&Polyurethane/seal - Polyurethane.avif', import.meta.url).href
                },
                {
                    name: 'Wheel - Polyurethane',
                    image: new URL('@/assets/products/Rubber&Polyurethane/Polyurethane - wheel.jpg', import.meta.url).href
                },
                {
                    name: 'Roll - Polyurethane',
                    image: new URL('@/assets/products/Rubber&Polyurethane/roll - Polyurethane.webp', import.meta.url).href
                },
                {
                    name: 'Coupling - Rubber',
                    image: new URL('@/assets/products/Rubber&Polyurethane/rubber - coupling.jpg', import.meta.url).href
                },
                {
                    name: 'Mechanical Seal - Rubber',
                    image: new URL('@/assets/products/Rubber&Polyurethane/rubber - mechanical seal.jpg', import.meta.url).href
                },
                {
                    name: 'Oil Seal - Rubber',
                    image: new URL('@/assets/products/Rubber&Polyurethane/rubber - oil seal.jpg', import.meta.url).href
                }
            ]
        },
        {
            id: 2,
            icon: new URL('@/assets/products/Hydraulic&Pneumatic/Hydrualic - Fitting.png', import.meta.url).href,
            name: 'Hydraulic & Pneumatic Equipment',
            description: 'Hydraulic & Pneumatic Equipment kami dirancang untuk mendukung sistem industri dengan performa tinggi, presisi, dan keandalan maksimal. Produk ini digunakan untuk menggerakkan, mengontrol, dan mentransmisikan tenaga menggunakan fluida (hidrolik) maupun udara bertekanan (pneumatik)',

            subProducts: [
                {
                    name: 'House - Hydraulic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/hydraulic - house.png', import.meta.url).href
                },
                {
                    name: 'Valve - Hydraulic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/Hydraulic-valve.jpg', import.meta.url).href
                },
                {
                    name: 'Fitting - Hydraulic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/Hydrualic - Fitting.png', import.meta.url).href
                },
                {
                    name: 'Cylinder - Pneumatic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/Pneumatic - cylinder.avif', import.meta.url).href
                },
                {
                    name: 'Fitting - Pneumatic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/Pneumatic - fitting.png', import.meta.url).href
                },
                {
                    name: 'Hose - Pneumatic',
                    image: new URL('@/assets/products/Hydraulic&Pneumatic/pneumatic - hose.jpg', import.meta.url).href
                }
            ]
        },
        {
            id: 3,
            icon: new URL('@/assets/products/Machining&Fabrication/machining fabrication.png', import.meta.url).href,
            name: 'Machining & Fabrication',
            description: 'Dengan tenaga kerja ahli serta didukung oleh mesin yang berteknologi tinggi, kami dapat menghasilkan barang dengan tingkat presisi dan akurasi yang tepat',

            subProducts: [
                {
                    name: 'Baut & Mur Stainless',
                    image: new URL('@/assets/products/Machining&Fabrication/baut-dan-mur-stainless.jpg', import.meta.url).href
                },
                {
                    name: 'Gear - Machining',
                    image: new URL('@/assets/products/Machining&Fabrication/gear Machining.jpg', import.meta.url).href
                },
                {
                    name: 'Rack Pinion Gear',
                    image: new URL('@/assets/products/Machining&Fabrication/rack pinion gear.png', import.meta.url).href
                },
                {
                    name: 'Shaft - Machining',
                    image: new URL('@/assets/products/Machining&Fabrication/shaft - Machining.jpg', import.meta.url).href
                },
                {
                    name: 'Milling - Machine',
                    image: new URL('@/assets/products/Machining&Fabrication/Milling Machine.png', import.meta.url).href
                },
                {
                    name: 'CNC - Machine',
                    image: new URL('@/assets/products/Machining&Fabrication/cnc.png', import.meta.url).href
                }
            ]
        }
    ])
</script>