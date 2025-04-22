<script setup lang="ts">
import RouteIcon from "~/components/atoms/icon/route-icon.vue";
import Container from "~/components/atoms/helper/container.vue";
</script>

<template>
  <Container class="flex xl:ml-4">
    <NuxtLink to="https://github.com/pnmh-soft" target="_blank" class="flex mr-4">
      <RouteIcon name="i-mdi-github"/>
    </NuxtLink>
    <NuxtLink to="mailto:portfolio@pnmh-soft.com" target="_blank" class="flex">
      <RouteIcon name="i-mdi-email"/>
    </NuxtLink>
  </Container>
</template>