<script setup lang="ts">
import Footer from "~/components/organisms/footer.vue";
import MainWrapper from "~/components/layouts/main-wrapper.vue";
</script>

<template>
  <UApp>
    <MainWrapper>
      <NuxtPage/>
    </MainWrapper>
    <Footer/>
  </UApp>
</template>