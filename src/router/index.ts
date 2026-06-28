import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import StudentLogin from '../pages/StudentLogin.vue';
import StudentDashboard from '../pages/StudentDashboard.vue';
import QuickReport from '../pages/QuickReport.vue';
import ThankYou from '../pages/ThankYou.vue';
import TrackReport from '../pages/TrackReport.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/studentlogin', component: StudentLogin },
    { path: '/studentdashboard', component: StudentDashboard },
    { path: '/quickreport', component: QuickReport },
    { path: '/thankyou', component: ThankYou },
    { path: '/trackreport', component: TrackReport },
  ],
});

export default router;