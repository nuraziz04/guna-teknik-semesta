<template>
    <section class="text-white mt-10 scroll-mt-24" id="legality">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Title -->
            <div class="text-center mb-16">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Legalitas Perusahaan
                </h1>

                <p class="text-gray-900 dark:text-white max-w-2xl mx-auto">
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
    </section>
</template>

<script setup>

import { ref } from 'vue'

const showModal = ref(false)

const selectedDoc = ref({})

const documents = ref([
{
title: "Akta Pendirian",
number: "AHU-0049262.AH.01.01.TAHUN 2021",
},
{
title: "NIB",
number: "2405230007018",
},
{
title: "NPWP",
number: "39.031.535.6-439.000",
},
{
title: "PKP",
number: "S-171/PKP/KPP.221703/2023",
}
])

function openModal(doc) {
selectedDoc.value = doc
showModal.value = true
}
</script>