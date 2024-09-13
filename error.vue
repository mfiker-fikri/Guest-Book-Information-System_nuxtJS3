<!-- pages/error.vue -->
<!-- <template>
  <div>
    <h1>An error has occurred</h1>
    <p>Sorry for the inconvenience. Please try again later.</p>
  </div>
</template> -->



<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

  
<!-- <script setup>
// You can add script logic here if needed
</script> -->

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<style scoped>
/* Add any styles if needed */
</style>
  