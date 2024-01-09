<template>
  <header>
    <div class="logo-wrp">
      <img src="../assets/img/800px-Hogwarts-coat.svg.png" alt="logo" class="logo" />
      <h1><span>Hogwarts</span> School of Witchcraft and Wizardry</h1>
    </div>
    <ul class="header-menu">
      <img
        src="@/assets/img/giphy.gif"
        class="sound"
        @click="isMusic = !isMusic"
      />
      <li class="header-menu__item"><a href="#faculties">Faculties</a></li>
      <li class="header-menu__item"><a href="">Teachers</a></li>
      <li class="header-menu__item"><a href="">Students</a></li>
      <li class="header-menu__item"><a href="">Training program</a></li>
      <li class="header-menu__item"><a href="">History of Hogwarts</a></li>
    </ul>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
const isMusic = ref(true)
let audio = null

watch(isMusic, (n) => {
  console.log(n)
  if (n === true) {
    audio.play()
  } else if (n === false) {
    audio.pause()
  }
})

onMounted(() => {
  audio = document.querySelector('.audio')
})
</script>

<style lang="scss" scoped>
header {
  padding: 20px 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
  font-family: 'Sofia Pro';
  color: #fff;
  text-shadow: 1px 1px 2px pink;
  .logo-wrp {
    display: flex;
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      span {
        font-size: 30px;
      }
    }
    .logo {
      height: 90px;
      margin-right: 15px;
    }
  }
  .sound {
    height: 80px;
  }
  .header-menu {
    font-size: 18px;
    align-items: center;
    list-style: none;
    display: flex;
    gap: 20px;

    a {
      color: unset;
      text-decoration: none;
    }
  }
}
</style>
