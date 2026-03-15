<template>
    <section class="text-white mt-20" id="contact">
        <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
            Let's Connect
        </h2>
        <div class="grid md:grid-cols-2 gap-4 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <div>
                <p class="text-[#adb7be]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Soluta alias quibusdam officia at, a quis cumque ea aperiam 
                    omnis minima quam. Modi necessitatibus odit corporis at dolorem 
                    quae iusto aliquam? Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nobis, porro!
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <!-- Email -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-white font-semibold">Email</h4>
                            <a href="mailto:official@gunatekniksemesta.com" class="text-[#adb7be] text-sm hover:text-orange-400 transition">
                                official@gunatekniksemesta.com
                            </a>
                        </div>
                    </div>
                    <!-- Whatsapp -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-white font-semibold">Whatsapp</h4>
                            <a href="https://wa.me/6282122220016" target="_blank" class="text-[#adb7be] text-sm hover:text-orange-400 transition">
                                0821-2222-0016
                            </a>
                        </div>
                    </div>
                    <!-- Address -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/marker.png" class="w-5 h-5"/>
                        </div>
                        <div class="ml-4">
                            <h4 class="text-white font-semibold">Address</h4>
                            <a href="https://maps.app.goo.gl/siu25XhAoKuMu9QN9"
                            target="_blank"
                            class="text-[#adb7be] text-sm leading-relaxed hover:text-orange-400 transition"
                            >
                            Jl. By Pass Jomin No.Timur, <br>
                            RT.11/RW.02, Jomin Tim., Kec. Kota Baru, <br>
                            Karawang, Jawa Barat 41376
                            </a>
                        </div>
                    </div>
                    <!-- Instagram -->
                    <div class="flex items-start">
                        <div class="w-12 h-12 flex items-center justify-center rounded-full bg-[#111a3e] border border-[#1f1641] backdrop-blur-md">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" class="w-5 h-5"/>
                        </div>

                        <div class="ml-4">
                            <h4 class="text-white font-semibold">Instagram</h4>
                            <a href="https://www.instagram.com/gunateknik_karawang/" target="_blank" class="text-[#adb7be] text-sm hover:text-orange-400 transition">
                                gunateknik_karawang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
            style="background: #111a3e; width: 100%; height: 100%; border-radius: 20px;
            overflow: hidden; border: 1px solid #111a3e; backdrop-filter: blur(9px);
            -webkit-backdrop-filter: blur(9px);"
            >
                <form class="flex flex-col p-2" data-aos="zoom-in-up">
                    <div class="mb-6">
                        <label for="email" class="text-white block mb-2 text-sm font-medium">email</label>
                        <input type="email" id="email" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="email@gmail.com" name="email"
                        />
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject</label>
                        <input type="subject" id="subject" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full w-full p-2.5" placeholder="subject" name="subject"
                        />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
                        <textarea id="message" class="bg-[#111827] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full w-full p-2.5" placeholder="Let's talk about ..."name="message"
                        ></textarea>
                    </div>
                    <button
                        class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-orange-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
</script>