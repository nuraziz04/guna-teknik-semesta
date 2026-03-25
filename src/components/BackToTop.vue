<template>
  <div class="fixed bottom-4 right-4 flex flex-col items-center gap-3 z-50">

    <!-- 🌗 Toggle Theme -->
    <button
      @click="toggleTheme"
      class="w-12 h-12 rounded-full flex items-center justify-center 
             bg-gray-700
             text-white dark:text-black 
             hover:scale-110 shadow-lg transition-all duration-300"
    >
      <span v-if="theme === 'dark'">🌙</span>
      <span v-else>☀️</span>
    </button>

    <!-- ⬆ Back To Top -->
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="w-12 h-12 rounded-full flex items-center justify-center text-white
             bg-gradient-to-r from-orange-400 to-pink-500 
             hover:scale-110 transition-all duration-300"
    >
      ↑
    </button>

  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const isVisible = ref(false)

// scroll
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 🌗 THEME (GLOBAL)
const theme = useLocalStorage("theme", "dark")

// apply ke html
watch(theme, (value) => {
  document.documentElement.classList.toggle("dark", value === "dark")
}, { immediate: true })

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark"
}

// lifecycle
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>