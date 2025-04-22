<script setup lang="ts">
import MainWrapper from "~/components/layouts/main-wrapper.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-700 text-white">
    <MainWrapper class="xl:p-14 py-10">
      Copyright ©{{ currentYear }} <span class="font-black">pNmH-soft</span> {{ $t('copyrights') }}.
    </MainWrapper>
  </footer>
</template>