<template>
  <header class="container">
    <router-link to="/" class="logo-wrp">
      <img src="../assets/img/800px-Hogwarts-coat.svg.png" alt="logo" class="logo" />
      <h1>Hogwarts <span>School of Witchcraft and Wizardry</span></h1>
    </router-link>
    <img
      src="@/assets/img/icons8-menu.svg"
      alt="menu"
      class="menu"
      v-if="windowWidth < 1100"
      @click="open = !open"
    />
    <img
      src="@/assets/img/icons8-крестик-78.png"
      alt=""
      :class="{ active: open }"
      @click="open = !open"
      v-if="open"
    />
    <ul class="header-menu" :class="{ open: open }">
      <li class="header-menu__item" @click="open = false">
        <div @click.prevent="scrollToMyEl()">Faculties</div>
      </li>
      <li class="header-menu__item" @click="open = false">
        <router-link to="/staff">Teachers</router-link>
      </li>
      <li class="header-menu__item" @click="open = false">
        <router-link to="/students">Students</router-link>
      </li>
      <li class="header-menu__item" @click="open = false">
        <router-link :to="{ name: 'training-program', query: { year: 'firstYear' } }"
          >Training program</router-link
        >
      </li>
      <li class="header-menu__item" @click="open = false">
        <router-link to="/history">History of Hogwarts</router-link>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePreloaderStore } from '@/stores/preloader'

const preloaderStore = usePreloaderStore()
const route = useRoute()
const router = useRouter()

const windowWidth = computed(() => {
  return window.innerWidth
})

const open = ref(false)

const scrollToMyEl = () => {
  if (route.name === 'Home' && route.hash && !preloaderStore.isPreloader) {
    const myEl = document.querySelector(route.hash)
    window.scrollTo({
      top: myEl.getBoundingClientRect().y,
      behavior: 'smooth'
    })
  } else {
    router.push({ name: 'Home', hash: '#faculties' })
  }
}
</script>

<style lang="scss" scoped>
header {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 11;
  width: 100%;
  font-family: 'Sofia Pro';
  color: #fff;
  text-shadow: 1px 1px 2px pink;
  transition: all 0.3s ease;
  top: 0;
  &.bgHeader {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.865983893557423) 36%,
      rgba(0, 0, 0, 0.3897934173669467) 100%
    );
  }
  &.header-show {
    transform: translateY(-100%);
  }
  .logo-wrp {
    display: flex;
    text-decoration: none;
    color: #fff;
    h1 {
      display: flex;
      flex-direction: column;
      font-size: 30px;
      span {
        font-size: 20px;
        @media (max-width: 1220px) {
          font-size: 16px;

          @media (max-width: 425px) {
            display: none;
          }
        }
      }
      @media (max-width: 425px) {
        font-size: 30px;
        align-items: center;
        justify-content: center;
      }
    }
    .logo {
      height: 90px;
      margin-right: 15px;
      @media (max-width: 1220px) {
        height: 70px;
      }
    }
  }

  .active {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    width: 30px;
  }
  .header-menu {
    font-size: 18px;
    align-items: center;
    list-style: none;
    display: flex;
    gap: 20px;
    li {
      cursor: pointer;
    }
    a {
      color: unset;
      text-decoration: none;
    }
    @media (max-width: 1220px) {
      font-size: 16px;
      white-space: nowrap;
    }
    @media (max-width: 1100px) {
      display: none;
    }
    @media (max-width: 1000px) {
      font-size: 16px;
    }
    &.open {
      background-color: #171b2b;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: start;
    }
  }
}
</style>
