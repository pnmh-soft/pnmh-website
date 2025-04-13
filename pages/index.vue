<script setup lang="ts">
import HeroLayout from "~/components/layouts/hero-layout.vue";
import Hero from "~/components/organisms/hero.vue";
import TwoSideGrid from "~/components/layouts/two-side-grid.vue"
import Technologies from "~/components/organisms/technologies.vue";
import TechnologiesDescription from "~/components/organisms/technologies-description.vue";
import Footer from "~/components/layouts/footer.vue"
</script>

<template>
  <HeroLayout>
    <Hero/>
  </HeroLayout>
  <TwoSideGrid class="mb-64">
    <TechnologiesDescription/>
    <Technologies/>
  </TwoSideGrid>
  <Footer />
</template>
