<template>
  <section class="places">
    <div class="place_block">
      <img src="@/assets/img/khogvarts-zal.jpg" alt="" />
      <p class="place_text">text</p>
    </div>
    <div class="place_block revert">
      <img src="@/assets/img/library.jpg" alt="" />
      <p class="place_text">text</p>
    </div>
    <div class="place_block">
      <img src="@/assets/img/khogsmid.jpg" alt="" />
      <p class="place_text">text</p>
    </div>
    <div class="place_block revert">
      <img src="@/assets/img/alley.jpeg" alt="" />
      <p class="place_text">
        it takes a great deal of bravery to stand up to out enemies but just as much to stand up to
        our friends
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.places {
  display: grid;
  grid-gap: 100px;
  .place_block {
    display: flex;
    grid-gap: 100px;
    &.revert {
      flex-direction: row-reverse;
    }
    img {
      width: 48%;
    }
    .place_text {
      font-family: 'Lumos';
      font-size: 24px;
      color: #fff;
    }
  }
}
</style>
