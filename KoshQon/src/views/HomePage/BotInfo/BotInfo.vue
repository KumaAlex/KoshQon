<template>
  <div class="bot">
    <div class="bot__left">
      <h3 class="bot__left__title">
        {{ left_text.title }}
      </h3>
      <div class="bot__left__descr gray">
        {{ left_text.descr }}
      </div>
    </div>
    <div class="bot__cards" v-for="card in cards">
      <BotCardComp :data="card" />
    </div>
  </div>
</template>

<script lang="ts">
import BotFrame1 from "@/views/HomePage/icons/BotFrame1.vue";
import BotFrame2 from "@/views/HomePage/icons/BotFrame2.vue";
import BotFrame3 from "@/views/HomePage/icons/BotFrame3.vue";
import BotCardComp from "@/views/HomePage/BotInfo/BotCardComp/BotCardComp.vue";
import {ref, shallowRef} from "vue";

export default {
  components: {BotFrame1, BotFrame2, BotFrame3, BotCardComp},
  data() {
    const left_text = shallowRef({
      title: "Reliable team\nat your fingertips",
      descr: "Create your team of trusted people\nwho will help for a very long time.\nWhatever you need, they will know\nhow to help you.",
    })
    const cards = shallowRef([
      {
        img_svg: BotFrame1,
        text: "Compare reviews, ratings and\nreliability"
      },
      {
        img_svg: BotFrame2,
        text: "Choose and contact\nwith the most suitable person"
      },
      {
        img_svg: BotFrame3,
        text: "And in order not to lose and contact them\nagain, save your favorite neighbors to\n“Favorites”"
      },
    ])
    return {
      left_text,
      cards
    }
  }
}
</script>

<style lang="scss" scoped src="./BotInfo.scss">

</style>