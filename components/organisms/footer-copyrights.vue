<script setup lang="ts">

const currentYear = new Date().getFullYear()
</script>

<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" />
  <div class="pb-4">
    <p class="font-light text-sm text-gray-800 leading-tight">
      Copyright © {{ currentYear }} pNmH-soft {{ $t('copyrights') }}
    </p>
  </div>
</template>
