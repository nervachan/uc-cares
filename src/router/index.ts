import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import StudentLogin from '../pages/StudentLogin.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/StudentLogin', component: StudentLogin },

  ],
});

export default router;