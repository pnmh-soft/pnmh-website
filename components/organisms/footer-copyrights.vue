<script setup lang="ts">

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="px-1 py-4 xl:mx-14">
    <p class="font-light text-sm text-gray-800 leading-tight">
      Copyright © {{ currentYear }} pNmH-soft {{ $t('copyrights') }}

    </p>
  </div>
</template>
