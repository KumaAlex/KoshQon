<template>
  <div class="card">
    <img class="card__img" :src="'src/views/HomePage/icons/' + data.img_url" alt="">
    <div class="card__title">
      {{ data.title }}
    </div>
    <div class="card__descr">
      {{ data.descr }}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{}
  },
  props: {
    data: {}
  }
}
</script>

<style lang="scss" scoped src="./MidCardComp.scss">

</style>