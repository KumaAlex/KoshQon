<template>
  <div class="content">
    <div v-for="c in content" :key="c.id">
      <ContentCardComp :content="c" />
    </div>
  </div>
</template>

<script setup lang="ts">

import ContentCardComp from "@/views/AnnouncementsPage/AnsContentComp/ContentCardComp/ContentCardComp.vue";
import {useAnnouncementStore} from "@/stores/announcement";

  const content = useAnnouncementStore().content;

  // const content = [
  //   {
  //     "id": 1,
  //     "address": "10 Abay St, Almaty",
  //     "description": "A bright and cozy apartment in the center of Almaty. Close to a park, supermarket, and metro. Newly renovated, fully furnished.",
  //     "price": "120,000 KZT per month",
  //     "photo": "https://krisha-photos.kcdn.online/content/4f/2065e3c024e795aa054-82155a1552eddb4361-shugyla.jpg",
  //     "user_id": "user123"
  //   },
  //   {
  //     "id": 2,
  //     "address": "45 Dostyk Ave, Almaty",
  //     "description": "Spacious three-room apartment with a view of Dostyk Avenue. High ceilings, large windows. Cafes, shops, and museums within walking distance.",
  //     "price": "180,000 KZT per month",
  //     "photo": "https://cf-kr.kcdn.online/content/d5/95995e3be373833ed-155almaty-2020rynok-arendy-almaty-obzor-cen.jpg",
  //     "user_id": "user456"
  //   },
  //   {
  //     "id": 3,
  //     "address": "20 Satpayev St, Almaty",
  //     "description": "Cozy one-room apartment in the city center. Perfect for students or a young couple. Close to the university and public transport stops.",
  //     "price": "80,000 KZT per month",
  //     "photo": "https://cf-kr.kcdn.online/content/fc/153375eff20ac1317b-348-2020skol-ko-stoit-arenda-doma-v-almaty.jpg",
  //     "user_id": "user789"
  //   },
  //   {
  //     "id": 4,
  //     "address": "15 Tole Bi St, Almaty",
  //     "description": "Large four-room apartment in a quiet area. The apartment has everything necessary for comfortable living. Green courtyard, playground.",
  //     "price": "150,000 KZT per month",
  //     "photo": "https://krisha-photos.kcdn.online/content/18/6595e3bff1b2ca0a235-.jpg",
  //     "user_id": "user321"
  //   },
  //   {
  //     "id": 5,
  //     "address": "5 Rozybakiev St, Almaty",
  //     "description": "Two-room apartment in a new building. Modern layout, high-quality finishes. Developed infrastructure, close to school and kindergarten.",
  //     "price": "100,000 KZT per month",
  //     "photo": "https://img.dmclk.ru/s640x1136q80/vitrina/owner/f5/5a/f55ac709d5c54cce8d3d8ea175737d5f.jpg",
  //     "user_id": "user654"
  //   },
  //   {
  //     "id": 6,
  //     "address": "30 Baitursynov St, Almaty",
  //     "description": "Studio in a new building. Bright and spacious, with a mountain view. Excellent option for a young family or investors.",
  //     "price": "70,000 KZT per month",
  //     "photo": "https://img.dmclk.ru/s640x1136q80/eva_house/b4/29/b4290e1332db43f8ae1340142e3be5993607cb75.jpg",
  //     "user_id": "user987"
  //   },
  //   {
  //     "id": 7,
  //     "address": "12 Zhambyl St, Almaty",
  //     "description": "Cozy two-room apartment with excellent renovation. Within walking distance to a mall, cafes, and transport links. Perfect for a family with children.",
  //     "price": "90,000 KZT per month",
  //     "photo": "https://gdb.rferl.org/4fed39ea-4389-48f6-b6aa-eca96893cc27_cx0_cy18_cw0_w1200_r1.jpg",
  //     "user_id": "user654"
  //   },
  //   {
  //     "id": 8,
  //     "address": "55 Nauryzbai Batyr St, Almaty",
  //     "description": "Spacious five-room apartment in an elite building. High ceilings, modern design, panoramic windows with city views. Secure territory, underground parking.",
  //     "price": "200,000 KZT per month",
  //     "photo": "https://gdb.rferl.org/9e72c6cb-e8c4-4960-84b6-dd97bfbde47a_cx0_cy15_cw100_w408_r1_s.jpg",
  //     "user_id": "user321"
  //   }
  // ]

</script>

<style scoped src="./AnsContentComp.scss">

</style>