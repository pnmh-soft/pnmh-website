<script setup lang="ts">
import greenLine from "~/assets/images/elements/line-green.png";
</script>

<template>
  <div class="line hidden xl:block absolute right-175 top-50">
    <img :src="greenLine" width="4px" alt="animated green line going from top to bottom"/>
  </div>
</template>

<style scoped>

.line {
  animation: animation-top-to-down 5s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes animation-top-to-down {
  0% {
    opacity: 0;
    transform: translateY(-150px);
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
    transform: translateY(150px);
  }
}
</style>