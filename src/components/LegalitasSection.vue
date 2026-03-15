<template>
    <section class="text-white mt-10 scroll-mt-24" id="legality">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Title -->
            <div class="text-center mb-16">
                <h1 class="text-4xl font-bold text-white mb-4">
                Legalitas Perusahaan
                </h1>

                <p class="text-white max-w-2xl mx-auto">
                Perusahaan kami telah terdaftar secara resmi dan memiliki seluruh izin usaha yang berlaku sesuai dengan regulasi di Indonesia.
                </p>
            </div>
            <!-- Card Documents -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div
                v-for="doc in documents"
                :key="doc.title"
                @click="openModal(doc)"
                data-aos="zoom-in-up"
                :data-aos-delay="index * 150"
                data-aos-duration="800"
                class="bg-white rounded-xl shadow hover:shadow-xl transition cursor-pointer group p-6 border"
                >
                    <div class="text-center">
                        <div
                        class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-lg group-hover:bg-blue-600 transition"
                        >
                            <svg class="w-8 h-8 text-blue-600 group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24">

                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12h6m-6 4h6M9 8h6m2 12H7a2 2 0 01-2-2V6a2 2 0 012-2h6l6 6v8a2 2 0 01-2 2z"/>

                            </svg>
                        </div>

                        <h3 class="font-semibold text-lg text-gray-800">
                        {{ doc.title }}
                        </h3>

                        <p class="text-gray-500 text-sm mt-2">
                        {{ doc.number }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Preview -->
        <div
        v-if="showModal"
        class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        >
            <div class="bg-white rounded-lg max-w-xl w-full p-6 relative">
                <button
                @click="showModal=false"
                class="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
                >
                ✕
                </button>
                <h3 class="text-lg font-semibold mb-4 text-center">
                {{ selectedDoc.title }}
                </h3>

                <div class="flex justify-center">
                    <img
                    :src="selectedDoc.image"
                    class="max-h-[400px] w-auto object-contain rounded shadow"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref } from 'vue'

const showModal = ref(false)

const selectedDoc = ref({})

const documents = ref([
{
title: "Akta Pendirian",
number: "No.01 Tahun 2020",
image: "src/assets/ceo-gts.jpg"
},
{
title: "NIB",
number: "9120301234567",
image: "src/assets/ceo-gts.jpg"
},
{
title: "NPWP",
number: "12.345.678.9-123.000",
image: "src/assets/ceo-gts.jpg"
},
{
title: "SIUP",
number: "503/123/SIUP",
image: "src/assets/ceo-gts.jpg"
}
])

function openModal(doc) {
selectedDoc.value = doc
showModal.value = true
}
</script>