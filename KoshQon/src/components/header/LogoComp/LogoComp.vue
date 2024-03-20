<template>
  <router-link to="/" class="link logo">
    <IconKoshQonLogo class="logo__img" />
    <div class="logo__name">
      <p class="logo__name-top">Kósh Qon</p>
      <p class="logo__name-bot">finding roommates</p>
    </div>
  </router-link>

</template>

<script>
  import IconKoshQonLogo from "@/components/icons/IconKoshQonLogo.vue";

  export default {
    components: {IconKoshQonLogo}
  }

</script>

<style lang="scss" scoped src="./LogoComp.scss">

</style>