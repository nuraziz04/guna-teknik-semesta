<template>
<section class="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-[#0f172a]">

    <!-- CONTENT -->
    <div class="px-6 md:px-16 pt-16">
        
        <!-- TITLE -->
        <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Filosofi Perusahaan
            </h2>
            <p class="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                Kami berkomitmen untuk memberikan solusi terbaik di bidang fabrikasi industri 
                dengan pengalaman, inovasi, dan pelayanan yang berorientasi pada kepuasan pelanggan.
            </p>
        </div>

        <!-- GRID -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div class="p-5 bg-white dark:bg-[#111827] rounded-xl shadow">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    Kami Memberi Solusi
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                    PT. Guna Teknik Semesta didirikan pada tahun 2019, kami mempunyai pengalaman yang cukup banyak di dunia teknik. Pendiri perusahaan ini sudah berkecimpung di dunia teknik lebih dari 30 tahun.
                    PT. Guna Teknik Semesta tidak hanya menjual barang jadi (Ready) tetapi juga menerima pemesanan barang yang sesuai dengan kebutuhan customer.
                </p>
            </div>

            <div class="p-5 bg-white dark:bg-[#111827] rounded-xl shadow">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    Kerjasama Berkelanjutan
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                    PT. Guna Teknik Semesta terus meningkatkan produk dan layanan dari waktu ke waktu tujuan akhir adalah memberikan produk dan jasa yang bernilai tinggi bagi pelanggan. Kami melakukannya secara berkesinambungan dengan selalu memperbaiki proses bisnis yang telah ada.
                </p>
            </div>

            <div class="p-5 bg-white dark:bg-[#111827] rounded-xl shadow">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    Menjawab Kebutuhan
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                    PT. Guna Teknik Semesta memahami bahwa setiap pelanggan
                    membutuhkan solusi yang berbeda. Kami tidak memberikan solusi satu produk untuk semua, namun kami berdiskusi dengan pelanggan untuk memahami dan memberikan solus yang tepat bagi kebutuhan mereka.
                </p>
            </div>

            <div class="p-5 bg-white dark:bg-[#111827] rounded-xl shadow">
                <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                    Sukses Bersama
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                    Pelanggan adalah fokus utama kami, kami menyediakan solusi terbaik untuk pelanggan
                    kami, agar mereka dapat menjadi yang terbaik dibidangnya. Kami tumbuh bersama anda.
                </p>
            </div>

        </div>
    </div>

    <!-- IMAGE (TERBATAS, TIDAK TERLALU BESAR) -->
    <div class="w-full flex justify-center pb-6">
        <img 
            src="@/assets/filosofi-gts.png" 
            alt="GTS Logo"
            class="max-h-[180px] md:max-h-[220px] object-contain opacity-90 dark:invert"
        />
    </div>

</section>
</template>
