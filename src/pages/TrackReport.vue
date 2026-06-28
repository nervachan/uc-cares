<script setup>
import { Search } from '@lucide/vue'
import { ref } from 'vue'

const jobOrder = ref(''); // Keep original ref name
const report = ref(null); // To store the found report details
const notFound = ref(false); // To indicate if a report was not found

const handleTrack = () => {
  notFound.value = false; // Reset notFound state
  report.value = null; // Clear any previously displayed report

  const savedData = localStorage.getItem('quickReportData');
  
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      if (data.trackingCode && data.trackingCode.toUpperCase() === jobOrder.value.toUpperCase()) {
        report.value = data; // Assign the found report data
      } else {
        notFound.value = true; // No matching tracking code
      }
    } catch (e) {
      console.error("Error parsing localStorage data:", e);
      notFound.value = true; // Indicate an error in parsing
    }
  } else {
    notFound.value = true; // No data found in localStorage
  }
};
</script>

<template>
  <div class="min-h-screen bg-[#059669] flex flex-col items-center px-6 py-12 font-sans">
    
    <!-- ==================== HEADER SECTION ==================== -->
    <div class="flex flex-col items-center text-center mb-8 w-full max-w-sm">
      
      <!-- Icon & Title -->
      <div class="flex items-center gap-4 mb-3">
        <Search class="w-12 h-12 text-white stroke-[2]" />
        <h1 class="text-3xl font-bold text-white tracking-tight">Track Report</h1>
      </div>

      <!-- Instructional Text -->
      <p class="text-white text-sm leading-relaxed text-center max-w-[280px]">
        Please enter the 5-digit Job Order Number that was sent to the email address you provided during the reporting process.
      </p>

    </div>

    <!-- ==================== FORM SECTION ==================== -->
    <div class="w-full max-w-[340px] space-y-6">
      
      <!-- Job Order Input -->
      <div class="space-y-2">
        <label class="block text-white text-xs font-medium uppercase tracking-wide ml-1">
          Job Order No.:
        </label>
        
        <div class="bg-white rounded-md shadow-sm p-3">
          <input 
            v-model="jobOrder"
            type="text" 
            maxlength="5"
            class="w-full bg-transparent text-center text-2xl font-bold tracking-[0.5em] text-gray-900 focus:outline-none placeholder-gray-300"
            placeholder="00000"
          />
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex justify-center pt-4">
        <button 
          @click="handleTrack"
          class="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold text-lg py-3 px-10 rounded-full shadow-lg transition-all active:scale-95 w-full max-w-[240px]"
        >
          Track Report
        </button>
      </div>

    </div>

    <!-- ==================== RESULTS SECTION ==================== -->
    <div v-if="report" class="mt-8 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Report Details</h2>
      <div class="space-y-3 text-gray-700">
        <p><span class="font-semibold">Tracking Code:</span> {{ report.trackingCode }}</p>
        <p><span class="font-semibold">Name:</span> {{ report.name || 'N/A' }}</p>
        <p><span class="font-semibold">Concern:</span> {{ report.concern }}</p>
        <p><span class="font-semibold">Location:</span> {{ report.location }}</p>
        <p><span class="font-semibold">Description:</span> {{ report.description }}</p>
        <p><span class="font-semibold">Urgency:</span> {{ report.urgency }}</p>
        <div v-if="report.image">
          <p class="font-semibold">Attached Image:</p>
          <img :src="report.image" alt="Report image" class="mt-2 rounded-md w-full border" />
        </div>
      </div>
    </div>

    <!-- NOT FOUND MESSAGE -->
    <div v-if="notFound" class="mt-8 text-center text-white bg-red-500/80 rounded-lg p-4 max-w-sm">
      <p class="font-semibold">No report found with that tracking code.</p>
    </div>

  </div>
</template>