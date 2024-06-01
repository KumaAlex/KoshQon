<template>
  <div class="top">
    <div class="top__name">
     <p>{{ user.name }} {{ user.surname }} - {{ user.gender }}</p>
      <button class="top__name__btn" @click="useUserStore().logout()">LOGOUT</button>
    </div>
    <div class="top__image">
    </div>
    <StarsComp rating="9" />
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user";
import StarsComp from "@/views/ProfilePage/TopNameComp/StarsComp/StarsComp.vue";


import FavoritesAnsComp from "@/views/ProfilePage/FavoritesAnsComp/FavoritesAnsComp.vue";
const user = useUserStore();

</script>

<style scoped src="./TopNameComp.scss">

</style>