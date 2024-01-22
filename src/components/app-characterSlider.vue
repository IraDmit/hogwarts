<template>
  <section class="charactersSection">
    <Carousel :itemsToShow="itemsShow" :wrapAround="true" :transition="500" :autoplay="2000">
      <Slide v-for="(item, idx) in people" :key="`slide${idx}`" class="carousel__item">
        <img :src="item.image" alt="image" class="characterImage" />
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { computed } from 'vue'
const props = defineProps({
  people: Array
})
console.log(window.innerWidth)
console.log(window.innerWidth < 650)
const itemsShow = computed(() => {
  if (window.innerWidth < 450) return 1
  return window.innerWidth < 650 ? 2 : 3
})
</script>

<style lang="scss" scoped>
.charactersSection {
  .characterImage {
    height: 500px;
    max-width: 340px;
    width: 100%;
    object-fit: cover;
    @media (max-width: 1730px) {
      height: 450px;
      padding: 10px;
    }
    @media (max-width: 1300px) {
      height: 400px;
    }
  }
}
</style>
