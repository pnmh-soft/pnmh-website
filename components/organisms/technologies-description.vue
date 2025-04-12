<script setup lang="ts">
import Description from "~/components/molecules/description.vue";
import technologiesDescription from "assets/data/technologies-description.json";
</script>

<template>
  <Description :heading="$t('technology-we-use')" :description="technologiesDescription.value"/>
</template>