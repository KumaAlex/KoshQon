<template>
  <div class="nav">
    <div class="nav__card" v-for="card in cards">
      <NavCardComp :data="card" />
    </div>
  </div>
</template>

<script lang="ts">
import NavCardComp from "@/views/HomePage/Navigation/NavCardComp/NavCardComp.vue";
export default {
  components: {NavCardComp},

  data() {
    return {
      cards: [
        {
          title: "My announcement",
          img_url: "GirlAnnouncement.jpg",
          link: "/new_announcement"
        },{
          title: "Favorites",
          img_url: "Favorites.png",
          link: "/profile"
        },{
          title: "Messenger",
          img_url: "Messenger.jpg",
          link: "/chats"
        },{
          title: "Guide",
          img_url: "Guide.jpg",
          link: "/Terms_of_use"
        }
      ]
    };
  }
}

</script>

<style lang="scss" scoped src="./NavComp.scss">

</style>