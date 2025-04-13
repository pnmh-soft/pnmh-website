<script setup lang="ts">
import HeroLayout from "~/components/layouts/hero-layout.vue";
import Hero from "~/components/organisms/hero.vue";
import TwoSideGrid from "~/components/layouts/two-side-grid.vue"
import Technologies from "~/components/organisms/technologies.vue";
import TechnologiesDescription from "~/components/organisms/technologies-description.vue";
import Footer from "~/components/layouts/footer.vue"
import ContactIcons from "~/components/organisms/contact-icons.vue";
import FooterCopyrights from "~/components/organisms/footer-copyrights.vue";
</script>

<template>
  <HeroLayout>
    <Hero/>
  </HeroLayout>
  <TwoSideGrid>
    <TechnologiesDescription/>
    <Technologies/>
  </TwoSideGrid>
  <Footer>
    <ContactIcons />
    <FooterCopyrights />
  </Footer>
</template>
