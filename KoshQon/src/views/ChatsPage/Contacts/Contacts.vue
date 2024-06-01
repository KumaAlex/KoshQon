<template>
  <div class="contacts">
    <div v-for="contact of contacts" class="contacts__box">
      <chatBox :con="contact" />
    </div>
  </div>
</template>

<script setup lang="ts">

  import ChatBox from "@/views/ChatsPage/Contacts/ChatBox/ChatBox.vue";

  const contacts = [
    {
      name: "Alex",
      surName: "Kim",
      lastMessage: 'last message', // time, text
      unread: 1,
      photo: '', // url or file
    },
    {
      name: "Alex",
      surName: "Kim",
      lastMessage: 'last message', // time, text
      unread: 1,
      photo: '', // url or file
    },
    {
      name: "Alex",
      surName: "Kim",
      lastMessage: 'last message', // time, text
      unread: 1,
      photo: '', // url or file
    },
  ]
</script>

<style scoped src="./Contacts.scss">

</style>