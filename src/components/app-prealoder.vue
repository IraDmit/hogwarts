<template>
  <div class="preloader">
    <div id="loading-bar-spinner" class="spinner"><div class="spinner-icon"></div></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #000;
  width: 100%;
  z-index: 10000;
}
#loading-bar-spinner.spinner {
  left: 50%;
  margin-left: -20px;
  top: 50%;
  margin-top: -20px;
  position: absolute;
  z-index: 19 !important;
  animation: loading-bar-spinner 400ms linear infinite;
}

#loading-bar-spinner.spinner .spinner-icon {
  width: 40px;
  height: 40px;
  border: solid 4px transparent;
  border-top-color: #f5bb43 !important;
  border-left-color: #f5bb43 !important;
  border-radius: 50%;
}

@keyframes loading-bar-spinner {
  0% {
    transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
