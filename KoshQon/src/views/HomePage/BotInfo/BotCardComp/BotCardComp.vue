<template>
  <div class="card">
    <component class="card__img" :is="data.img_svg" />
    <p class="card__text gray">
      {{ data.text }}
    </p>
  </div>
</template>

<script>

export default {
  props: {
    data: {},
  }
}
</script>

<style lang="scss" scoped src="./BotCardComp.scss">

</style>