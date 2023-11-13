<template>
  <header>
    <img src="../assets/img/picmix.com_844831.png" alt="logo" class="logo" />
    <img src="https://media4.giphy.com/media/mXbQ2IU02cGRhBO2ye/giphy.gif" class="sound" @click="isMusic = !isMusic"/>
    <ul class="header-menu">
      <li class="header-menu__item">Сharacters</li>
      <li class="header-menu__item">Spells</li>
      <li class="header-menu__item">Potions</li>
      <li class="header-menu__item">Quotes</li>
      <li class="header-menu__item">Quiz</li>
    </ul>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
const isMusic = ref(true)
const audio = document.querySelector('.audio')

watch(isMusic, (n) => {
  console.log(n)
  if (n === true) {
    audio.play()
  } else if (n === false) {
    audio.pause()
  }
})
</script>

<style lang="scss" scoped>
header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  backdrop-filter: blur(2px);
  .logo {
    height: 90px;
    backdrop-filter: blur(5px);
  }
  .header-menu {
    list-style: none;
    display: flex;
    gap: 20px;
    backdrop-filter: blur(5px);
  }
}
</style>
