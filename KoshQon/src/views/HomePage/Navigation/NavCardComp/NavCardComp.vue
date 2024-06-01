<template>
  <a class="card" @click="route()">
    <img class="card__img" :src="'src/views/HomePage/icons/' + data.img_url" alt="">
    <div class="card__title">
      {{ data.title }}
    </div>
  </a>
</template>

<script>
import router from "@/router";

export default {
  data() {
    return {
    }
  },
  props: {
    data: {}
  },
  methods: {
    route() {
      router.push(this.data.link);
    }
  }
}
</script>

<style lang="scss" scoped src="./NavCardComp.scss">

</style>