<template>
  <div class="rating-stars">
    <span
        v-for="n in maxStars"
        :key="n"
        class="star"
        :class="{ filled: n <= rating }"
    >★</span>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true
  },
  maxStars: {
    type: Number,
    default: 10
  }
});
</script>

<style scoped src="./StarsComp.scss">
</style>
