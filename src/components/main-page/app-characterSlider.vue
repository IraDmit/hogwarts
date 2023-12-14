<template>
  <section class="charactersSection">
    <div class="leftCol">
      <h3>
        Let me introduce you to some of our famous wizards: from the brave Harry to the cunning
        Hermione, from the brave Ron to the mysterious Snape. Each of them left their mark on the
        history of our school.
      </h3>
    </div>
    <div class="rightCol">
      <Carousel :itemsToShow="3" :wrapAround="true" :transition="500" :autoplay="2000">
        <Slide v-for="(item, idx) in characters" :key="`slide${idx}`">
          <div class="carousel__item">
            <img :src="item.image" alt="image" class="characterImage" />
            <!-- <p>{{ item.name }}</p> -->
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const { characters } = defineProps(['characters'])
</script>

<style lang="scss" scoped>
.charactersSection {
  display: flex;
  padding: 70px 0;
  .leftCol {
    width: calc(35% - 35px);
    margin-right: 35px;
  }
  .rightCol {
    width: 65%;
    .characterImage {
      height: 500px;
      width: 340px;
      object-fit: cover;
    }
  }
}
</style>
