<template>
  <div class="mid">
    <p class="mid__text gray">
      The site has a database consisting of people who want <br>
      find roommates. Select the required service, enter <br>
      a few details and find reliable neighbors. It's easy to get started!
    </p>
    <div class="mid__cards">
      <div v-for="card in cards">
        <MidCardComp :data="card" />
      </div>
    </div>
  </div>
</template>

<script>
import MidCardComp from "@/views/HomePage/MidInfo/MidCardComp/MidCardComp.vue";

export default {
  components: {MidCardComp},

  data() {
    return {
      cards: [
        {
          title: "Find\nsuitable\ncandidate",
          img_url: "Find.png",
          descr: "Choose a service, add a few details to your taste, and we will find people for you."
        },
        {
          title: "Connect with\nresponded\npeople",
          img_url: "Connect.png",
          descr: "We have a very simple process of filling out a questionnaire - finding neighbors. This way we increase the chance of finding you more suitable people."
        },
        {
          title: "Live and\nwork\nin a team",
          img_url: "Live.png",
          descr: "Communicate directly with the author of the ad. Ask questions, request additional information, make appointments with the person of your choice."
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped src="./MidInfo.scss">

</style>