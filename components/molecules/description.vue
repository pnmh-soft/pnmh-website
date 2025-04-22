<script setup lang="ts">
import TextWrapper from "~/components/layouts/text-wrapper.vue";
import Container from "~/components/atoms/helper/container.vue";
import SectionHeading from "~/components/atoms/helper/section-heading.vue";

defineProps({
  heading: String,
  description: String,
})
</script>

<template>
  <TextWrapper>
    <Container>
      <SectionHeading>
        {{ heading }}.
      </SectionHeading>
    </Container>
    <Container>
      {{ description }}
    </Container>
  </TextWrapper>
</template>
