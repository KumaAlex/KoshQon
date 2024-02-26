<template>
  <div class="nav">
    <div class="nav__card" v-for="card in cards">
      <NavCardComp :data="card" />
    </div>
  </div>
</template>

<script>
import NavCardComp from "@/views/HomePage/Navigation/NavCardComp/NavCardComp.vue";
export default {
  components: {NavCardComp},

  data() {
    return {
      cards: [
        {
          title: "My announcement",
          // img_url: "GirlAnnouncement.jpg",
          img_url: "GirlAnnouncement.jpg",
          link: ""
        },{
          title: "Favorites",
          img_url: "Favorites.png",
          link: ""
        },{
          title: "Messenger",
          img_url: "Messenger.jpg",
          link: ""
        },{
          title: "Guide",
          img_url: "Guide.jpg",
          link: ""
        }
      ]
    };
  }
}

</script>

<style lang="scss" scoped src="./NavComp.scss">

</style>