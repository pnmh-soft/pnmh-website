<script setup lang="ts">
import CardTitle from "~/components/atoms/card/card-title.vue";
import CardHeading from "~/components/atoms/card/card-heading.vue";
import CardDescription from "~/components/atoms/card/card-description.vue";

const props = defineProps({
  key: Number,
  name: String,
  logo: String,
  description: String,
});

const uCardStyle = ``;
</script>

<template>
  <UCard class="xl:flex inset-shadow-sm">
    <CardHeading>
      <Icon :name="logo" class="mr-4"/>
      <CardTitle>{{ name }}</CardTitle>
    </CardHeading>
    <CardDescription>
      {{ description }}
    </CardDescription>
  </UCard>
</template>

<style scoped>
</style>