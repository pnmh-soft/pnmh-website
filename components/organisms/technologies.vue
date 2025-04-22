<script setup lang="ts">
import TwoSideGrid from "~/components/layouts/two-side-grid.vue";
import TechnologyCard from "~/components/molecules/technology-card.vue";
import technologies from "~/assets/data/technologies.json";
</script>

<template>
  <TwoSideGrid>
    <TechnologyCard
        v-for="technology in technologies"
        :key="technology.id"
        :name="technology.name"
        :logo="technology.logo"
        :description="technology.description"
    />
  </TwoSideGrid>
</template>