<template>
  <div class="mainScreen">
    <div class="bg-first">
      <img
        src="@/assets/img/bg-one(1).png"
        loading="eager"
        srcset="
          @/assets/img/bg-one(1)-p-500.png   500w,
          @/assets/img/bg-one(1)-p-800.png   800w,
          @/assets/img/bg-one(1)-p-1080.png 1080w,
          @/assets/img/bg-one(1)-p-1600.png 1600w,
          @/assets/img/bg-one(1).png        1920w
        "
        class="static"
      />
      <img
        src="@/assets/img/castle.png"
        loading="eager"
        srcset="
          @/assets/img/bg-two-min(1)-p-500.png   500w,
          @/assets/img/bg-two-min(1)-p-800.png   800w,
          @/assets/img/bg-two-min(1)-p-1080.png 1080w,
          @/assets/img/castle.png               1920w
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
.mainScreen {
  position: relative;
}
.bg-first {
  position: relative;
  width: 100%;
  height: 200vh;
  background: url('@/assets/img/sky.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
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
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(180deg, rgba(7, 15, 23, 0) 0%, #070f17 100%);
    z-index: 2;
  }
  @media (max-width: 1024px) {
    height: 104vh;
    .castle {
      height: 122vh;
      top: -15%;
    }
    .static {
      top: -13%;
      height: 120vh;
    }
  }
  @media (max-width: 720px) {
    background: url('@/assets/img/hog-small.jpg');
    background-repeat: no-repeat;
    background-position: center;
    height: 101vh;
    background-size: cover;
    .castle,
    .static {
      display: none;
    }
  }
}
.intoduce {
  display: flex;
  justify-content: center;
  align-items: start;

  position: absolute;
  top: 20%;
  left: 0;

  background-image: linear-gradient(
    transparent 8%,
    currentColor 29%,
    currentColor 68%,
    transparent 87%
  );
  -webkit-background-clip: text;
  background-clip: text;
  background-attachment: fixed;

  .title_text {
    color: #fff;
    max-width: 60%;
    text-align: center;
    font-family: 'Sofia Pro';
    font-size: 30px;
    @media (max-width: 1730px) {
      font-size: 25px;
    }
    @media (max-width: 1200px) {
      max-width: 70%;
    }
    @media (max-width: 900px) {
      max-width: 85%;
      font-size: 22px;
    }
    @media (max-width: 650px) {
      max-width: 90%;
      font-size: 20px;
    }
  }
  @media (max-width: 720px) {
    top: 35%;
  }
}
</style>
