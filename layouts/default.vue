<script setup lang="ts">
import MainWrapper from "~/components/layouts/main-wrapper.vue";
import Footer from "~/components/organisms/footer.vue";
</script>

<template>
  <UApp>
    <MainWrapper>
      <NuxtPage/>
    </MainWrapper>
    <Footer/>
  </UApp>
</template>