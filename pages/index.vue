<script setup lang="ts">
import Technologies from "~/components/organisms/technologies.vue";
import TwoSideGrid from "~/components/layouts/two-side-grid.vue"
import TechnologyDescriptionFlex from "~/components/layouts/technology-description-flex.vue";
import technologiesDescription from "~/assets/data/technologies-description.json";
</script>

<template>
  <TwoSideGrid class="my-32">
    <TechnologyDescriptionFlex>
      {{ technologiesDescription.value }}
    </TechnologyDescriptionFlex>
    <Technologies/>
  </TwoSideGrid>
</template>
