<template>
  <div class="header">
    <logo-comp />
    <lang-comp />
    <search-comp />
    <user-comp />
  </div>
</template>


<script>
import SearchComp from "@/components/header/SearchComp/SearchComp.vue";
import LogoComp from "@/components/header/LogoComp/LogoComp.vue";
import LangComp from "@/components/header/LangComp/LangComp.vue";
import UserComp from "@/components/header/UserComp/UserComp.vue";
export default {
  components: {UserComp, SearchComp, LangComp, LogoComp}
}
</script>

<style lang="scss" scoped src="./HeaderComp.scss">

</style>