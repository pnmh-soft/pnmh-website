<script setup lang="ts">
import MainWrapper from "~/components/layouts/main-wrapper.vue";
import TwoSideGrid from "~/components/layouts/two-side-grid.vue";
import Container from "~/components/atoms/helper/container.vue";
import ContractIcons from "~/components/molecules/contract-icons.vue";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-slate-700 text-white">
    <MainWrapper class="xl:p-14 py-10">
      <TwoSideGrid class="translate-y-2">
        <Container class="flex items-center text-md">
          Copyright ©{{ currentYear }} <span class="font-black mx-2">pNmH-soft</span> {{ $t('copyrights') }}.
        </Container>
        <Container>
          <ContractIcons/>
        </Container>
      </TwoSideGrid>
    </MainWrapper>
  </footer>
</template>