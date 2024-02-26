<template>
  <div class="search">
    <input class="search__inp" type="search" placeholder="What are you looking for?" />

    <button class="search__btn"><IconSearch2 class="search__icon" /></button>
  </div>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch.vue";
import IconSearch2 from "@/components/icons/IconSearch2.vue";

export default {
  components: {IconSearch, IconSearch2}

}
</script>

<style lang="scss" scoped src="./SearchComp.scss">

</style>