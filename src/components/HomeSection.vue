<template>
  <section class="relative w-full" data-aos="zoom-in-up">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
    </div>

    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
        <div class="lg:py-6">
            <div class="text-center lg:text-left">
                <h1 class="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl">
                    <span class="text-transparent bg-clip-text 
                        bg-gradient-to-r 
                        from-green-600 to-emerald-800
                        dark:from-green-50 dark:to-green-500">
                        Guna Teknik Semesta
                    </span>
                </h1>
            </div>
            <p class="text-gray-600 dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                Perkembangan industri makin hari kian berkembang pesat, tak heran apabila saat ini Indonesia memiliki banyak daerah kawasan industri. Ditinjau dari kebutuhan pasar yang meningkat dan persaingan antar produsen yang semakin ketat, maka berimbas pada mesin-mesin produksi yang digunakan oleh perusahaan tak hentinya berjalan. Untuk memenuhi target produksi perusahaan, maka dari itu CV. G.T.S hadir sebagai bagian penunjang kegiatan produksi perusahaan anda khususnya pada bagian sparepart...
            </p>

            <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                <a 
                href="#about"
                class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center"
                >
                    <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-orange-400 border-2 border-transparent"></span>
                    <span class="relative flex items-center justify-center text-white">
                        Selengkapnya
                    </span>
                </a>
                <button class="border border-orange-400 px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                    <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                    
                    <div class="svg-container">
                        <svg
                        class="download-icon"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            class="download-arrow"
                            d="M13 9L9 13M9 13L5 9M9 13V1"
                            stroke="#f59e0b"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                            stroke="#f59e0b"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        </svg>
                        <div class="download-loader text-white hidden"></div>
                    </div>

                    <a href="/katalog.pdf" download="katalog.pdf" class="pl-2 text-orange-400">
                        Download Katalog
                    </a>

                    </div>
                </button>
            </div>
        </div>
        <div class="lg:h-full md:flex">
            <div class="flex w-full items-center justify-center relative">
                <!-- Glow Background -->
                <div 
                    class="absolute w-80 h-80 rounded-full blur-3xl opacity-30
                    bg-gradient-to-tr 
                    from-purple-400 to-blue-300
                    dark:from-[#570cac] dark:to-primary">
                </div>

                <!-- Image Container -->
                <div class="relative w-72 md:w-[520px] aspect-square overflow-hidden">
                    <img 
                    src="@/assets/home-image.png" 
                    alt="Hero pic"
                    class="w-full h-full object-contain 
                    mix-blend-normal 
                    dark:mix-blend-lighten"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>