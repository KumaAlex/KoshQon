<template>
  <div class="profile">
    <leftPanelComp class="profile__left" />
    <div>
      <TopNameComp />
      <FavoritesAnsComp />
    </div>

  </div>
</template>

<script lang="ts" setup>
import leftPanelComp from "@/components/leftPanelComp/leftPanelComp.vue";
import TopNameComp from "@/views/ProfilePage/TopNameComp/TopNameComp.vue";
import FavoritesAnsComp from "@/views/ProfilePage/FavoritesAnsComp/FavoritesAnsComp.vue";


</script>

<style lang="scss" scoped src="./ProfilePage.scss">

</style>