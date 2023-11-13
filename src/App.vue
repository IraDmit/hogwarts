<script setup>
import theHeader from './navigation/the-header.vue'
import appMainScreen from './components/app-mainScreen.vue'
import { ref } from 'vue'
const fetchData = () => {}
</script>

<template>
  <video
    hidden
    src="/src/assets/audio/592.mp3"
    controls=""
    loop=""
    autoplay=""
    name="media"
    preload="auto"
    class="audio"
  ></video>
  <the-header />
  <app-main-screen />
  <div class="wrp"></div>
</template>

<style scoped></style>
