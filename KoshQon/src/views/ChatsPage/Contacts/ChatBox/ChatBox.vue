<template>
  <div>
    <div class="contacts__box__mid">
      <div class="contacts__box__name"> {{ con.name }} {{ con.surName }} </div>
      <div class="contacts__box__message"> {{ con.lastMessage }} </div>
    </div>
    <div class="contacts__box__right">
      время
    </div>
    <div class="contacts__box__unread">
      {{ con.unread }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    con: {},
  }
}
</script>

<style scoped src="./ChatBox.scss">
</style>
