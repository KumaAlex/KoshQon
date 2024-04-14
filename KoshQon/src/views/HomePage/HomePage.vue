<template>
  <div class="home">
    <img class="home__topImg" src="@/views/HomePage/icons/TopImage.png" alt="TopImage">
    <NavComp />
    <MidInfo />
    <BotInfo />
  </div>
</template>

<script lang="ts" setup>
import NavComp from "@/views/HomePage/Navigation/NavComp.vue";
import MidInfo from "@/views/HomePage/MidInfo/MidInfo.vue";
import BotInfo from "@/views/HomePage/BotInfo/BotInfo.vue";
</script>

<style lang="scss" scoped src="./HomePage.scss">

</style>