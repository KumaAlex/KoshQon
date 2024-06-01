<template>
  <div class="favs">
    <h1>Your favorites Announcements:</h1>
    <div class="container">
      <div v-for="c in content">
        <ContentCardComp :content="c" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentCardComp from "@/views/AnnouncementsPage/AnsContentComp/ContentCardComp/ContentCardComp.vue";
import {useAnnouncementStore} from "@/stores/announcement";
import {useUserStore} from "@/stores/user";

const content = useAnnouncementStore().content.filter((e) => useUserStore().favorites.includes(e.id));

</script>

<style scoped src="./FavoritesAnsComp.scss">

</style>