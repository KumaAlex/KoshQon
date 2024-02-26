<template>
  <div class="home">
    <img class="home__topImg" src="@/views/HomePage/icons/TopImage.png" alt="TopImage">
    <NavComp />
  </div>
</template>

<script>
import NavComp from "@/views/HomePage/Navigation/NavComp.vue";
export default {
  components: {NavComp}
}
</script>

<style lang="scss" scoped src="./HomePage.scss">

</style>