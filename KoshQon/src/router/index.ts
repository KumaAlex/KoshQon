import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/views/HomePage/HomePage.vue';
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage/RegisterPage.vue";
import AnnouncementPage from "@/views/AnnouncementPage/AnnouncementPage.vue";
import ProfilePage from "@/views/ProfilePage/ProfilePage.vue";
import chatsPage from "@/views/chatsPage/chatsPage.vue";
import Mobile_AppsPage from "@/views/Mobile_AppsPage/Mobile_AppsPage.vue";
import Social_mediaPage from "@/views/Social_mediaPage/Social_mediaPage.vue";
import Anno from "@/views/Terms_of_usePage/Terms_of_usePage.vue";
import AnnouncementsPage from "@/views/AnnouncementsPage/AnnouncementsPage.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/new_announcement',
      name: 'new announcement',
      component: AnnouncementPage
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage
    },
    {
      path: '/chats',
      name: 'chats',
      component: chatsPage
    },
    {
      path: '/Mobile_Apps',
      name: 'Mobile Apps',
      component: Mobile_AppsPage
    },
    {
      path: '/Social_media',
      name: 'Social media',
      component: Social_mediaPage
    },
    {
      path: '/Terms_of_use',
      name: 'Terms of use',
      component: Anno
    },
    {
      path: '/Announcements',
      name: 'Announcements',
      component: AnnouncementsPage
    },
  ]
})

export default router
