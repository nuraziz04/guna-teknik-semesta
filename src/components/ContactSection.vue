<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white text-left mb-4 px-4 xl:pl-16">
            Let's Connect
        </h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-gray-600 dark:text-[#adb7be]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta alias quibusdam officia at, a quis cumque ea aperiam 
                    omnis minima quam. Modi necessitatibus odit corporis at dolorem 
                    quae iusto aliquam? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nobis, porro!
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <!-- Email -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2456] dark:bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-gray-900 dark:text-white font-semibold">Email</h4>
                            <a href="mailto:official@gunatekniksemesta.com" class="text-gray-600 dark:text-[#adb7be] text-sm hover:text-orange-400 transition">
                                official@gunatekniksemesta.com
                            </a>
                        </div>
                    </div>
                    <!-- Whatsapp -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2456] dark:bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-gray-900 dark:text-white font-semibold">Whatsapp</h4>
                            <a href="https://wa.me/6282122220016" target="_blank" class="text-gray-600 dark:text-[#adb7be] text-sm hover:text-orange-400 transition">
                                0821-2222-0016
                            </a>
                        </div>
                    </div>
                    <!-- Address -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2456] dark:bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" class="w-5 h-5"/>
                        </div>
                        <div class="ml-4">
                            <h4 class="text-gray-900 dark:text-white font-semibold">Address</h4>
                            <a href="https://maps.app.goo.gl/siu25XhAoKuMu9QN9"
                            target="_blank"
                            class="text-gray-600 dark:text-[#adb7be] text-sm leading-relaxed hover:text-orange-400 transition"
                            >
                            Jl. By Pass Jomin No.Timur, <br>
                            RT.11/RW.02, Jomin Tim., Kec. Kota Baru, <br>
                            Karawang, Jawa Barat 41376
                            </a>
                        </div>
                    </div>
                    <!-- Instagram -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a2456] dark:bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-gray-900 dark:text-white font-semibold">Instagram</h4>
                            <a href="https://www.instagram.com/gunateknik_karawang/" target="_blank" class="text-gray-600 dark:text-[#adb7be] text-sm hover:text-orange-400 transition">
                                gunateknik_karawang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-full rounded-[20px] overflow-hidden
                bg-white dark:bg-[#111a3e]
                border border-gray-300 dark:border-[#1f1641]
                backdrop-blur-md">

                <form @submit.prevent="sendEmail" class="flex flex-col p-2" data-aos="zoom-in-up">
                    <div class="mb-6">
                        <label 
                            for="email" 
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email
                        </label>
                        <input 
                            required
                            v-model="email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@gmail.com"
                            class="w-full p-2.5 text-sm rounded-lg outline-none transition
                            bg-white text-gray-900 placeholder-gray-400 border border-gray-300
                            dark:bg-[#111827] dark:text-gray-100 dark:placeholder-[#9CA2A9] dark:border-[#1f1641]
                            focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <div class="mb-6">
                        <label 
                            for="subject" 
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Subject
                        </label>
                        <input 
                            required
                            v-model="subject"
                            type="subject"
                            id="subject"
                            name="subject"
                            placeholder="subject"
                            class="w-full p-2.5 text-sm rounded-lg outline-none transition
                            bg-white text-gray-900 placeholder-gray-400 border border-gray-300
                            dark:bg-[#111827] dark:text-gray-100 dark:placeholder-[#9CA2A9] dark:border-[#1f1641]
                            focus:ring-2 focus:ring-orange-400"
                        />
                    </div>
                    <div class="mb-6">
                        <label 
                            for="message" 
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Message
                        </label>
                        <textarea required
                            v-model="message"
                            type="message"
                            id="message"
                            name="message"
                            placeholder="Let's talk about ..."
                            class="w-full p-2.5 text-sm rounded-lg outline-none transition
                            bg-white text-gray-900 placeholder-gray-400 border border-gray-300
                            dark:bg-[#111827] dark:text-gray-100 dark:placeholder-[#9CA2A9] dark:border-[#1f1641]
                            focus:ring-2 focus:ring-orange-400"></textarea>
                    </div>
                    <button type="submit"
                        class="w-full cursor-pointer px-6 py-3 rounded-full flex justify-center text-white bg-orange-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue"
import Swal from "sweetalert2"
import { sendTelegramService } from "@/services/telegramService"

const email = ref("")
const subject = ref("")
const message = ref("")

const sendEmail = async () => {
  try {
    await sendTelegramService(email.value, subject.value, message.value)

    Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Pesan kamu sudah terkirim 🚀",
        confirmButtonColor: "#f97316",
        width: "320px",
        customClass: {
            popup: "rounded-xl"
        }
    })

    email.value = ""
    subject.value = ""
    message.value = ""
  } catch (error) {
    Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Pesan tidak terkirim ❌",
        confirmButtonColor: "#ef4444",
        width: "320px",
        customClass: {
            popup: "rounded-xl"
        }
    })
  }
}
</script>