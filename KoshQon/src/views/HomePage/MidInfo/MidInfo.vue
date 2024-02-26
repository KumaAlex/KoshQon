<template>
  <div>
    <p class="mid__text">
      The site has a database consisting of people who want <br>
      find roommates. Select the required service, enter <br>
      a few details and find reliable neighbors. It's easy to get started!
    </p>
    <div class="mid__cards">
      <div v-for="card in cards" :key="item.id">
        <MidCardComp :data="card"/>
      </div>
    </div>
  </div>
</template>

<script>
import MidCardComp from "@/views/HomePage/MidInfo/MidCardComp/MidCardComp.vue";

export default {
  components: {MidCardComp},
}
</script>

<style lang="scss" scoped src="./MidInfo.scss">

</style>