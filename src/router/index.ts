import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import StudentLogin from '../pages/StudentLogin.vue';
import StudentDashboard from '../pages/StudentDashboard.vue';
import QuickReport from '../pages/QuickReport.vue';
import ThankYou from '../pages/ThankYou.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/StudentLogin', component: StudentLogin },
    { path: '/StudentDashboard', component: StudentDashboard },
    { path: '/QuickReport', component: QuickReport },
    { path: '/thankyou', component: ThankYou },
  ],
});

export default router;