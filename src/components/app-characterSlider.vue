<template>
  <section class="charactersSection">
    <Carousel :itemsToShow="3" :wrapAround="true" :transition="500" :autoplay="2000">
      <Slide v-for="(item, idx) in teachers" :key="`slide${idx}`" class="carousel__item">
        <img :src="item.image" alt="image" class="characterImage" />
      </Slide>
    </Carousel>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { defineProps } from 'vue'

const props = defineProps(['teachers'])


</script>

<style lang="scss" scoped>
.charactersSection {
  .characterImage {
    height: 500px;
    width: 340px;
    object-fit: cover;
  }
}
</style>
