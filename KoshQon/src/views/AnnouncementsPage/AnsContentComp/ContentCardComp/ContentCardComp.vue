<template>
  <div class="card">
    <div class="card__img" :style="{ backgroundImage: `url(${content.photo})` }">
      <Favorite_light
          @click="toggleFav()"
          :style="{ fill: exist ? 'red' : 'none' }"
          class="card__img-like" />
      <div class="card__img-price">{{ content.price }}</div>
    </div>
    <div class="card__address">{{ content.address }}</div>
    <div class="card__author">{{ content.user_id }}</div>
    <div class="card__description">{{ content.description }}</div>
  </div>
</template>

<script setup lang="ts">
import Favorite_light from "@/views/AnnouncementsPage/AnsContentComp/ContentCardComp/LikeIcon/Favorite_light.vue";
import {useUserStore} from "@/stores/user";
import {toggleFavById} from "@/services/favorites";
import {ref} from "vue";

const props = defineProps<{
  content: {};
}>();

const id = props.content.id;
let exist = ref(useUserStore().favorites.includes(id));

function toggleFav() {
  toggleFavById(id);
  exist.value = !exist.value;
}


</script>

<style scoped src="./ContentCardComp.scss">

</style>