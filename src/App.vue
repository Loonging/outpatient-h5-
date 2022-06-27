<script setup lang="ts"></script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="app">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import url('@/style/reset.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
