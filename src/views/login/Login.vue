<template>
  <van-skeleton title avatar :row="3" :loading="loading">
    <div>实际内容</div>
  </van-skeleton>
</template>

<script setup lang="ts" name="Login">
import { ref } from 'vue'
const loading = ref(true)
</script>

<style scoped lang="less"></style>
