<script setup>
import TheFooter from './navigation/the-footer.vue'
import theHeader from './navigation/the-header.vue'
import appPreloader from './components/app-prealoder.vue'
import Lenis from '@studio-freight/lenis'
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { usePreloaderStore } from '@/stores/preloader'

const isHideHeader = ref(false)
const isBgHeader = ref(false)
const preloaderStore = usePreloaderStore()

const router = useRouter()
const lenis = new Lenis()

let lastScroll = 0
const defaultOffset = 130

const scrollPosition = () => lenis.actualScroll || document.documentElement.scrollTop

const bgHeader = () =>
  lenis.actualScroll > 400 ? (isBgHeader.value = true) : (isBgHeader.value = false)

const hideHeader = () => {
  if (scrollPosition() > lastScroll && scrollPosition() > defaultOffset) {
    isHideHeader.value = true
  } else if (scrollPosition() < lastScroll) {
    isHideHeader.value = false
  }
  lastScroll = scrollPosition()
  bgHeader()
}
console.log(router)

watch(
  router.currentRoute,
  (newV, oldV) => {
    if (newV?.name === oldV?.name) return
    preloaderStore.isPreloader = true
    setTimeout(() => {
      preloaderStore.isPreloader = false
    }, 1000)
  },

  { immediate: true }
)

onMounted(() => {
  hideHeader()
  window.addEventListener('scroll', hideHeader)
})

lenis.on('scroll', () => {})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template>
  <app-preloader v-if="preloaderStore.isPreloader" />
  <the-header :class="{ 'header-show': isHideHeader, bgHeader: isBgHeader }" />
  <router-view :key="$route.fullPath"></router-view>
  <TheFooter />
</template>

<style scoped></style>
