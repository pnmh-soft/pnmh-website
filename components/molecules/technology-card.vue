<script setup lang="ts">
import CardTitle from "~/components/atoms/card/card-title.vue";
import CardHeading from "~/components/atoms/card/card-heading.vue";
import CardDescription from "~/components/atoms/card/card-description.vue";

defineProps({
  name: String,
  logo: String,
  description: String,
});
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