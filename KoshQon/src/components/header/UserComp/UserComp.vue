<template>
  <div class="user">
    <router-link to="new_announcement" class="user__announcement btn">
      New Announcement
    </router-link>
    <router-link v-if="!profile.isLogged" to="login" class="user__profile btn">
      LOGIN
    </router-link>
    <router-link  v-if="profile.isLogged" to="profile" class="user__profile btn">
      PROFILE
    </router-link>
  </div>
</template>

<script>
import {useProfileStore} from "@/stores/profile.ts";

export default {
  data() {
    const profile = useProfileStore();
    return {
      profile
    }
  }
}
</script>

<style lang="scss" scoped src="./UserComp.scss">

</style>