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
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)),
    url('@/assets/img/zamok.jpg');
  background-size: cover;
  height: 100vh;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
