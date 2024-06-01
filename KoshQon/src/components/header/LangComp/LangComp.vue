<template>
  <button class="header__lang" @click="changeLanguage">
    {{ cur_lan }}
  </button>
</template>

<script>

import {ref} from "vue";

export default {
  data() {
    return {
      languages: ["ru", "en", "kz"],
      cur_lan: ref("en"),
      cur_ind: ref(0),
    }
  },
  methods: {
    changeLanguage() {
      this.cur_ind = (this.cur_ind+1) % this.languages.length
      this.cur_lan = this.languages[this.cur_ind];
    }
  }
}
</script>

<style lang="scss" scoped src="./LangComp.scss">

</style>