<script setup lang="ts">

import RouteIcon from "~/components/atoms/icon/route-icon.vue";
import Center from "~/components/atoms/helper/center.vue"
</script>

<template>
  <Center class="space-x-4">
    <NuxtLink to="https://github.com/pnmh-soft" target="_blank" class="flex">
      <RouteIcon name="i-mdi-github" />
    </NuxtLink>

    <NuxtLink to="mailto:portfolio@pnmh-soft.com" target="_blank" class="flex">
      <RouteIcon name="i-mdi-email" />
    </NuxtLink>
  </Center>
</template>
