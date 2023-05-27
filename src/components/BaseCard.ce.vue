<template>
  <div class="base-card">
    <div class="section-left">
      <slot name="left"></slot>
    </div>
    <div class="section-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.base-card {
  @apply grid grid-cols-12 bg-white h-[336px] w-[438px] rounded-lg;
  .section {
    &-left {
      @apply col-span-5;
    }
    &-right {
      @apply col-span-7;
    }
  }
}
</style>
