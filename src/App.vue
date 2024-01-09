<script setup>
import appMainPage from './components/app-mainPage.vue'
import TheFooter from './navigation/the-footer.vue'
import theHeader from './navigation/the-header.vue'
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template>
  <the-header />
  <app-mainPage />
  <TheFooter />
</template>

<style scoped></style>
