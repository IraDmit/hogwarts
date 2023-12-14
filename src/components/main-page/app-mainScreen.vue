<template>
  <div class="bg-first">
    <img
      src="@/assets/img/609454a1070ccc0a58d19260_bg-one%20(1).png"
      loading="eager"
      srcset="
        @/assets/img/609454a1070ccc0a58d19260_bg-one%20(1)-p-500.png   500w,
        @/assets/img/609454a1070ccc0a58d19260_bg-one%20(1)-p-800.png   800w,
        @/assets/img/609454a1070ccc0a58d19260_bg-one%20(1)-p-1080.png 1080w,
        @/assets/img/609454a1070ccc0a58d19260_bg-one%20(1)-p-1600.png 1600w,
        @/assets/img/609454a1070ccc0a58d19260_bg-one%20(1).png          1920w
      "
      class="static"
    />
    <img
      src="@/assets/img/609454a1070ccc805ed19261_bg-two-min%20(1).png"
      loading="eager"
      srcset="
        @/assets/img/609454a1070ccc805ed19261_bg-two-min%20(1)-p-500.png   500w,
        @/assets/img/609454a1070ccc805ed19261_bg-two-min%20(1)-p-800.png   800w,
        @/assets/img/609454a1070ccc805ed19261_bg-two-min%20(1)-p-1080.png 1080w,
        @/assets/img/609454a1070ccc805ed19261_bg-two-min%20(1).png          1920w
      "
      alt="castle"
      class="castle"
    />
  </div>
  <div class="intoduce">
    <h2 class="title_text">
      Welcome to the greatest school of magic and witchcraft, Hogwarts! Here, where the history of
      magic comes to life at every turn, and where every stone whispers the secret spells of the
      past.
    </h2>
  </div>
</template>

<!-- фон будет немного затемняться и появляется надпить приветствия -->

<script setup>
import { onMounted } from 'vue'
class Snowflake {
  constructor() {
    this.x = 0
    this.y = 0
    this.vx = 0
    this.vy = 0
    this.radius = 0
    this.alpha = 0

    this.reset()
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth)
    this.y = this.randBetween(0, -window.innerHeight)
    this.vx = this.randBetween(-3, 3)
    this.vy = this.randBetween(2, 5)
    this.radius = this.randBetween(1, 4)
    this.alpha = this.randBetween(0.1, 0.9)
  }

  randBetween(min, max) {
    return min + Math.random() * (max - min)
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.y + this.radius > window.innerHeight) {
      this.reset()
    }
  }
}

class Snow {
  constructor() {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')

    this.canvas.classList.add('snow')

    document.querySelector('.bg-first').appendChild(this.canvas)

    window.addEventListener('resize', () => this.onResize())
    this.onResize()
    this.updateBound = this.update.bind(this)
    requestAnimationFrame(this.updateBound)

    this.createSnowflakes()
  }

  createSnowflakes() {
    const flakes = window.innerWidth / 4
    this.snowflakes = []

    for (let i = 0; i < flakes; i++) {
      this.snowflakes.push(new Snowflake())
    }
  }

  onResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height)

    for (const flake of this.snowflakes) {
      flake.update()

      this.ctx.save()
      this.ctx.fillStyle = '#fff'
      this.ctx.beginPath()
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
      this.ctx.closePath()
      this.ctx.globalAlpha = flake.alpha
      this.ctx.fill()
      this.ctx.restore()
    }
    requestAnimationFrame(this.updateBound)
  }
}
onMounted(() => {
  new Snow()
})
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  height: 150vh;
}
.bg-first {
  position: relative;
  width: 100%;
  height: 200vh;
  background: url('@/assets/img/sky.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  z-index: -2;
  .static {
    width: 100%;
    position: fixed;
    top: -25%;
    height: 250vh;
    left: 0;
    z-index: -1;
  }
  .castle {
    position: absolute;
    width: 100%;
    height: 232vh;
    top: -15%;
    left: 0;
    display: block;
    // object-fit: cover;
  }
}
.intoduce {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 40vh;
  background-color: #070f17;
  .title_text {
    color: #fff;
    max-width: 60%;
    margin-top: 80px;
    font-family: 'Sofia Pro';
  }
}
</style>
