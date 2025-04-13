<script setup lang="ts">
import LogoLetter from "~/components/atoms/hero/logo-letter.vue";
import Center from "~/components/atoms/helper/center.vue";
</script>

<template>
  <Center>
    <div class="animated-logo">
      <div class="logo-left-line"></div>
      <div class="logo-right-line"></div>
      <div class="logo-top-line"></div>
      <div class="logo-bottom-line"></div>
      <div class="flex">
        <LogoLetter class="translate-x-6">p</LogoLetter>
        <LogoLetter class="translate-x-4">N</LogoLetter>
        <LogoLetter class="translate-x-2">m</LogoLetter>
        <LogoLetter>H</LogoLetter>
      </div>
    </div>
    <div class="-translate-x-10 translate-y-10.5">
      <p class="text-3xl select-none">soft</p>
    </div>
  </Center>
</template>

<style scoped>
.animated-logo {
  position: relative;
}

.logo-left-line,
.logo-right-line,
.logo-bottom-line,
.logo-top-line {
  position: absolute;
  background-color: #314158;
}

.logo-left-line,
.logo-right-line {
  width: 6px;
}

.logo-left-line {
  height: 65px;
  left: 20px;
  top: 32px;
  animation: animation-top-to-down 4s ease-in-out infinite;
}

.logo-right-line {
  top: 12px;
  right: -2px;
  height: 54px;
}

.logo-bottom-line,
.logo-top-line {
  width: 170px;
  height: 6px;
  left: 81px;
}

.logo-bottom-line {
  bottom: 6px;
}

.logo-top-line {
  top: 4px;
}

@keyframes animation-top-to-down {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }

  20% {
    opacity: 100%;
    transform: translateY(0px);
  }

  80% {
    opacity: 100%;
    transform: translateY(0px);
  }

  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>