<template>
  <div class="min-h-screen bg-[#059669] flex flex-col items-center justify-center font-sans text-white p-6">
    <h1 class="text-4xl font-bold mb-4">Thank you for your report!</h1>
    <p class="text-xl mb-8 text-center">It has been received by the Campus Management Office and will be reviewed and addressed upon as soon as possible.</p>
    <p class="text-lg text-center">Your tracking code is: <span class="font-bold text-yellow-300">{{ trackingCode }}</span></p>
    <router-link to="/StudentDashboard" class="mt-10 px-8 py-3 bg-white text-[#059669] font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all">
      Go to Home
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const trackingCode = ref('');

onMounted(() => {
  const savedData = localStorage.getItem('quickReportData');
  if (savedData) {
    const data = JSON.parse(savedData);
    trackingCode.value = data.trackingCode || 'N/A';
  }
});
</script>
