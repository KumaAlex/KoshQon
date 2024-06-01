<template>
  <div class="ans">
    <leftPanelComp class="ans__left" />
    <AnsContentComp class="ans__right" />
  </div>
</template>

<script setup lang="ts">
import leftPanelComp from "@/components/leftPanelComp/leftPanelComp.vue";
import AnsContentComp from "@/views/AnnouncementsPage/AnsContentComp/AnsContentComp.vue";
</script>

<style scoped src="./AnnouncementsPage.scss">

</style>