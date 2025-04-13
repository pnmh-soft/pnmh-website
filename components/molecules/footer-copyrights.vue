<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <p class="font-light text-sm text-gray-800 leading-tight">
    Copyright © {{ currentYear }} pNmH-soft {{ $t('copyrights') }}
  </p>
</template>
