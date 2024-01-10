<script setup>
import TheFooter from './navigation/the-footer.vue'
import theHeader from './navigation/the-header.vue'
import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()

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
  <router-view></router-view>
  <TheFooter />
</template>

<style scoped></style>
