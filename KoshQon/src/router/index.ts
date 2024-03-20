import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/views/HomePage/HomePage.vue';
import LoginPage from "@/views/LoginPage/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage/RegisterPage.vue";
import AnnouncementPage from "@/views/AnnouncementPage/AnnouncementPage.vue";



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
      path: '/announcement',
      name: 'announcement',
      component: AnnouncementPage
    },
  ]
})

export default router
