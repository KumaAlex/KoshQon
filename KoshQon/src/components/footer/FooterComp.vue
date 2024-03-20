<template>
  <div class="footer">
    <div class="footer__table">
      <div class="footer__column white">
        <p>Kósh Qon</p>
      </div>
      <div class="footer__column gray">
        <p>Become a specialist</p>
        <p>About Us</p>
        <p>Public offer</p>
      </div>
      <div class="footer__column white">
        <p>Almaty, Tole bi 59</p>
        <p>+7 771 527 43 70</p>
        <p>info@rommies.kz</p>
      </div>
      <div class="footer__column gray">
        <p>We are in social networks</p>

        <div class="footer__icons">
          <button><Instagram class="footer__icon" /></button>
          <button><Facebook class="footer__icon" /></button>
          <button><Vk class="footer__icon" /></button>
        </div>
      </div>
    </div>

    <div class="footer__rights gray">
      © 2024 Kósh-Qon.kz   All rights reserved
    </div>
  </div>
</template>

<script>
import Instagram from "@/components/icons/Instagram.vue";
import Vk from "@/components/icons/Vk.vue";
import Facebook from "@/components/icons/Facebook.vue";

export default {
  components: {Instagram, Facebook, Vk},

}

</script>

<style lang="scss" scoped src="./FooterComp.scss">

</style>