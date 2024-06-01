<template>
  <div class="user">
    <router-link to="announcements" class="user__announcement btn">
      Announcements
    </router-link>
    <router-link v-if="!user.isLogged" to="login" class="user__profile btn">
      LOGIN
    </router-link>
    <router-link  v-if="user.isLogged" to="profile" class="user__profile btn">
      PROFILE
    </router-link>
  </div>
</template>

<script>
import {useUserStore} from "@/stores/user.ts";

export default {
  data() {
    const user = useUserStore();
    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped src="./UserComp.scss">

</style>