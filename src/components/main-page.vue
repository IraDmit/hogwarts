<template>
  <app-main-screen />
  <div class="wrp">
    <canvas class="canvas" id="canvas" width="100%"></canvas>
    <div class="canvas-wrp container">
      <app-places />
      <app-faculties />
      <app-teachers />
    </div>
    <app-form />
  </div>
</template>

<script setup>
import appMainScreen from './main-page/app-mainScreen.vue'
import { useCharactersStore } from '../stores/characters'
import appPlaces from './main-page/app-places.vue'
import { onMounted } from 'vue'
import AppFaculties from './main-page/app-faculties.vue'
import AppTeachers from './main-page/app-teachers.vue'
import AppForm from './main-page/app-formSection.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import { usePreloaderStore } from '@/stores/preloader'

const prelodaerState = usePreloaderStore()
const route = useRoute()
const charactersStore = useCharactersStore()
charactersStore.fetchCharacters()

watch(
  prelodaerState,
  ({ isPreloader }) => {
    if (route.hash && isPreloader === false) {
      const myEl = document.querySelector(route.hash)
      window.scrollTo({
        top: myEl.getBoundingClientRect().y,
        behavior: 'smooth'
      })
    }
  },
)

onMounted(() => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  setTimeout(() => {
    wrpHeight = document.querySelector('.wrp').clientHeight
    sizeCanvas()
    setup()
    windowResize()
  }, 1000)
})

const opts = {
  minRadius: 0.5,
  maxRadius: 1.5,
  colors: [
    'rgba(255, 255, 255, 0.5)',
    'rgba(252, 253, 248, 0.5)',
    'rgba(210, 223, 225, 0.5)',
    'rgba(255, 234, 216, 0.5)',
    'rgba(191, 211, 255, 0.5)',
    'rgba(176, 202, 255, 0.5)',
    'rgba(230, 235, 255, 0.5)',
    'rgba(255, 218, 187, 0.5)'
  ],
  delay: 100,
  step: 0.05,
  trangles: 4,
  intervalRadius: 2.5
}
let canvas
let ctx
let w
let h
let wrpHeight
const arrStars = []
let check
let animations
function sizeCanvas() {
  w = canvas.width = window.innerWidth - 17
  h = canvas.height = wrpHeight
  return w, h
}
window.addEventListener('resize', function () {
  windowResize()
})
function windowResize() {
  arrStars.length = 0
  clearTimeout(check)
  check = setTimeout(function () {
    clearInterval(animations)
    sizeCanvas()
    setup()
  }, 100)
}
const Stars = function (w, h) {
  this.x = Math.random() * w
  this.y = Math.random() * h
  this.color = opts.colors[[Math.round(Math.random() * opts.colors.length)]]
  this.vector = Math.round(Math.random()) || -1
  this.minRadius = opts.minRadius + Math.random() * (opts.maxRadius - opts.minRadius)
  this.maxRadius = this.minRadius + opts.intervalRadius
  this.draw = function () {
    ctx.beginPath()
    ctx.moveTo(this.x, this.y + this.minRadius)
    for (var i = 0; i < 2 * opts.trangles + 1; i++) {
      var r = i % 2 == 0 ? this.minRadius : this.maxRadius
      var a = (Math.PI * i) / opts.trangles + (45 * Math.PI) / 180
      ctx.lineTo(this.x + r * Math.sin(a), this.y + r * Math.cos(a))
    }
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
  this.update = function () {
    this.check()
    this.minRadius += opts.step * this.vector
    this.maxRadius += opts.step * this.vector
  }
  this.check = function () {
    if (this.minRadius > opts.maxRadius || this.minRadius < opts.minRadius) {
      this.vector *= -1
    }
  }
}
function setup() {
  for (let i = 0; i < (w / 100) * (h / 100); i++) {
    arrStars.push(new Stars(w, h))
    arrStars[i].draw()
  }
  loop()
}
// setup()
function loop() {
  animations = setInterval(function () {
    ctx.clearRect(0, 0, w, h)
    for (let i = 0; i < arrStars.length; i++) {
      arrStars[i].update()
      arrStars[i].draw()
    }
  }, opts.delay)
}
</script>

<style lang="scss" scoped>
.wrp {
  position: relative;
  .canvas {
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
