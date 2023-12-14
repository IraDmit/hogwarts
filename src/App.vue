<script setup>
import appMainPage from './components/app-mainPage.vue'
import theHeader from './navigation/the-header.vue'
import { useCharactersStore } from './stores/characters'
import { storeToRefs } from 'pinia'
// import { ref, onMounted } from 'vue'

const charactersStore = useCharactersStore()
const { getTenCharacters } = storeToRefs(charactersStore)
charactersStore.fetchCharacters()
</script>

<template>
  <the-header />
  <app-mainPage />
</template>

<style scoped></style>
