<template>
  <a class="card" :href=data.link>
    <img class="card__img" :src="'src/views/HomePage/icons/' + data.img_url" alt="">
    <div class="card__title">
      {{ data.title }}
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    data: {}
  }
}
</script>

<style lang="scss" scoped src="./NavCardComp.scss">

</style>