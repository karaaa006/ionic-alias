<template>
  <ion-button :class="{ block, fullHeight }"><slot /></ion-button>
</template>

<script setup lang="ts">
import { IonButton } from "@ionic/vue";

interface Props {
  block?: boolean;
  fullHeight?: boolean;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
ion-button {
  --background: #93e9be;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;
  --padding-top: 20px;
  --padding-bottom: 20px;

  font-size: 24px;
  font-weight: 600;

  &.block {
    width: 100%;
  }

  &.fullHeight {
    height: 100%;
  }
}
</style>
