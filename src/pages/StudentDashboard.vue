<script setup>
import { TriangleAlert, Search } from '@lucide/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Navigation function placeholders
const goToQuickReport = () => {
  router.push('/quickreport')
  console.log('Navigating to Quick Report...')
}

const goToTrackReport = () => {
  router.push('/trackreport')
  console.log('Navigating to Track Report...')
}
</script>

<template>
  <div class="min-h-screen bg-[#059669] flex flex-col items-center justify-center px-6 font-sans relative">
    
    <!-- ==================== LOGO SECTION ==================== -->
    <div class="relative w-full max-w-[240px] aspect-[2/1] mb-10 flex justify-center items-center select-none">
      <!-- The UC part -->
      <div class="absolute left-0 top-0 bottom-0 w-[55%] flex items-center justify-center bg-transparent">
        <span class="text-[110px] leading-none font-black text-white tracking-tighter drop-shadow-[0_8px_8px_rgba(0,0,0,0.2)]" style="font-family: Arial, Helvetica, sans-serif;">UC</span>
      </div>
      
      <!-- The AReS part -->
      <div class="absolute right-0 top-[15%] bottom-[15%] w-[45%] flex flex-col justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
        <span class="text-[28px] leading-none font-bold tracking-tight" style="font-family: Arial, Helvetica, sans-serif;">AReS</span>
      </div>

      <!-- Overlapping green circle piece to create the connection illusion -->
      <div class="absolute right-[48%] bottom-[10%] w-12 h-12 bg-[#059669] rounded-full z-[-1]"></div>
      <div class="absolute right-[42%] bottom-[25%] w-10 h-10 bg-[#059669] rounded-full z-[-1]"></div>
    </div>

    <!-- ==================== WELCOME TEXT ==================== -->
    <div class="text-center mb-10">
      <h1 class="text-white text-2xl font-medium tracking-wide mb-1">Welcome!</h1>
      <p class="text-white text-lg font-light opacity-90">What do you want to do?</p>
    </div>

    <!-- ==================== ACTION BUTTONS ==================== -->
    <div class="w-full max-w-[340px] space-y-5">
      
      <!-- Quick Report Button -->
      <button 
        @click="goToQuickReport"
        class="w-full bg-white rounded-2xl py-6 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
      >
        <div class="flex items-center justify-center w-10 h-10 bg-red-50 rounded-full">
          <TriangleAlert class="w-6 h-6 text-red-500" />
        </div>
        <span class="text-[#1a1a1a] text-xl font-bold tracking-wide">Quick Report</span>
      </button>

      <!-- Track Report Button -->
      <button 
        @click="goToTrackReport"
        class="w-full bg-white rounded-2xl py-6 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
      >
        <div class="flex items-center justify-center w-10 h-10 bg-emerald-50 rounded-full">
          <Search class="w-6 h-6 text-[#059669]" />
        </div>
        <span class="text-[#1a1a1a] text-xl font-bold tracking-wide">Track Report</span>
      </button>

    </div>

  </div>
</template>