<script setup>
import { User } from '@lucide/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const ucId = ref('')
const password = ref('')

const handleLogin = () => {
  router.push('/StudentDashboard')
}
</script>

<template>
<!-- ==================== TOP HEADER BAR ==================== -->
    <header class="bg-white px-4 py-2 flex items-center justify-between shadow-sm shrink-0">
      <!-- Left: School Logo Placeholder -->
      <div class="w-12 h-12 rounded-full border-2 border-gray-300 overflow-hidden flex items-center justify-center bg-gray-100 shadow-sm shrink-0">
        <!-- Placeholder for the school seal -->
        <div class="w-full h-full bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center text-[8px] text-white font-bold leading-tight text-center p-1">
          UC<br>SEAL
        </div>
      </div>
    </header>
     
  <div class="min-h-screen bg-[#059669] flex flex-col items-center justify-center p-6 font-sans relative">
    
    <!-- ==================== LOGO SECTION ==================== -->
    <div class="relative w-full max-w-[180px] aspect-[2/1] mb-8 flex justify-center items-center select-none">
      <!-- The UC part -->
      <div class="absolute left-0 top-0 bottom-0 w-[55%] flex items-center justify-center bg-transparent">
        <span class="text-[90px] leading-none font-black text-white tracking-tighter drop-shadow-[0_8px_8px_rgba(0,0,0,0.2)]" style="font-family: Arial, Helvetica, sans-serif;">UC</span>
      </div>
      
      <!-- The AReS part -->
      <div class="ml-32 top-[15%] bottom-[15%] w-[45%] flex flex-col justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
        <span class="text-[22px] leading-none font-bold tracking-tight" style="font-family: Arial, Helvetica, sans-serif;">AReS</span>
      </div>

      <!-- Overlapping green circle piece to create the illusion of the UC connecting into AReS -->
      <div class="absolute right-[48%] bottom-[10%] w-10 h-10 bg-[#059669] rounded-full z-[-1]"></div>
      <div class="absolute right-[42%] bottom-[25%] w-8 h-8 bg-[#059669] rounded-full z-[-1]"></div>
    </div>

    <!-- ==================== LOGIN HEADER ==================== -->
    <div class="flex items-center gap-4 mb-8">
      <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        <User class="w-6 h-6 text-white" />
      </div>
      <h1 class="text-2xl font-bold text-white">Student Login</h1>
    </div>

    <!-- ==================== LOGIN FORM ==================== -->
    <form @submit.prevent="handleLogin" class="w-full max-w-[360px] space-y-6">
      
      <!-- UC ID Input -->
      <div class="space-y-1">
        <label for="ucId" class="block text-xs font-bold text-white uppercase tracking-wide ml-1">
          UC ID. NUMBER
        </label>
        <input 
          id="ucId"
          v-model="ucId"
          type="text" 
          class="w-full px-4 py-3 rounded-lg border-0 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
          placeholder=""
        />
      </div>

      <!-- Password Input -->
      <div class="space-y-1">
        <label for="password" class="block text-xs font-bold text-white uppercase tracking-wide ml-1">
          PASSWORD
        </label>
        <input 
          id="password"
          v-model="password"
          type="password" 
          class="w-full px-4 py-3 rounded-lg border-0 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
          placeholder=""
        />
      </div>

      <!-- Submit Button -->
      <div class="pt-4 flex justify-center">
        <button 
          type="submit"
          class="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold text-base py-3 px-16 rounded-full shadow-lg transition-all active:scale-95 w-full max-w-[200px]"
        >
          Log in
        </button>
      </div>

    </form>

  </div>
</template>