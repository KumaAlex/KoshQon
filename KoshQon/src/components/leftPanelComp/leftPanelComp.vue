<template>
  <div class="panel">
    <div class="panel__categories" v-for="categ of categories">
      <router-link :to="categ.link" class="panel__category link">{{categ.name}}</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const categories = [
    {
      name: 'User',
      img: '',
      link: 'profile',
    },
    {
      name: 'Chats',
      img: '',
      link: 'chats',
    },
    {
      name: 'Announcements',
      img: '',
      link: 'announcements',
    },
    {
      name: 'Mobile Apps',
      img: '',
      link: 'Mobile_Apps',
    },
    {
      name: 'Social media',
      img: '',
      link: 'Social_media',
    },
    {
      name: 'Terms of use',
      img: '',
      link: 'Terms_of_use',
    },
  ]
</script>

<style lang="scss" scoped src="./leftPanelComp.scss">

</style>