<template>
  <p class="text">
    By choosing Hogwarts, you enter a wonderful world of magic, adventure and self-discovery. This
    school will become your second home, and lessons will be the key to a magical future.
  </p>
  <section class="form_wrp">
    <app-form />
  </section>
</template>

<script setup>
import appForm from '../app-form.vue'
</script>

<style lang="scss" scoped>
.text {
  padding: 70px 0;
  font-family: 'Sofia pro';
  font-size: 28px;
  color: #fff;
  max-width: 60%;
  text-align: center;
  margin: 100px auto;
}

.form_wrp {
  background-image: linear-gradient(0deg, #070f17 0%, rgba(151, 117, 250, 0) 46%, #070f17 100%),
    url('@/assets/img/zamok.jpg');

  background-size: cover;
  height: 100vh;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
