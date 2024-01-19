<script setup>
import TheFooter from './navigation/the-footer.vue'
import theHeader from './navigation/the-header.vue'
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()

window.lenis = lenis

lenis.on('scroll', () => {
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
  <router-view :key="$route.fullPath"></router-view>
  <TheFooter />
</template>

<style scoped></style>
