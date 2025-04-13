<script setup lang="ts">
defineProps<{
  name: string,
}>()
</script>

<template>
  <UIcon :name="name" class="size-10 transition delay-100 duration-300 ease-in-out hover:scale-125 hover:-translate-y-4" />
</template>
