<script setup>
import { User, Users, RotateCcw, Settings } from '@lucide/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Initialize the router
const router = useRouter()

// Function to navigate to the Student Login page
const goToStudentLogin = () => {
  router.push('/StudentLogin')
}

// Function to navigate to the Staff Login page (optional for now)
const goToStaffLogin = () => {
  router.push('/stafflogin') // Replace with your actual staff login route
}
</script>

<template>
  <div class="min-h-screen bg-[#059669] flex flex-col font-sans relative">
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

    <!-- ==================== MAIN CONTENT ==================== -->
    <main class="flex-1 flex flex-col items-center px-6 pt-12 pb-8">
      
      <!-- UCARes Logo Placeholder (Recreated closely) -->
      <div class="relative w-full max-w-[280px] aspect-[2/1] mb-6 flex justify-center items-center select-none">
        <!-- The UC part -->
        <div class="absolute left-0 top-0 bottom-0 w-[55%] flex items-center justify-center bg-transparent">
          <span class="text-[140px] leading-none font-black text-white tracking-tighter drop-shadow-[0_8px_8px_rgba(0,0,0,0.2)]" style="font-family: Arial, Helvetica, sans-serif;">UC</span>
        </div>
        
        <!-- The AReS part -->
        <div class="ml-48 top-[15%] bottom-[15%] w-[45%] flex flex-col justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
          <span class="text-[32px] leading-none font-bold tracking-tight" style="font-family: Arial, Helvetica, sans-serif;">AReS</span>
        </div>

        <!-- Overlapping white circle piece to create the illusion of the UC connecting into AReS -->
        <div class="absolute right-[48%] bottom-[10%] w-16 h-16 bg-[#059669] rounded-full z-[-1]"></div>
        <div class="absolute right-[42%] bottom-[25%] w-12 h-12 bg-[#059669] rounded-full z-[-1]"></div>
      </div>

      <!-- Welcome Text -->
      <div class="text-center mb-10 space-y-1 max-w-[300px]">
        <p class="text-white text-sm font-light tracking-wide">Welcome to the</p>
        <p class="text-white text-[15px] leading-tight font-medium">
          <span class="font-bold">U</span>niversity <span class="font-bold">C</span>ampus <span class="font-bold">A</span>lert &amp; <span class="font-bold">R</span>epair <span class="font-bold">S</span>ystem
        </p>
      </div>

      <!-- Login Buttons -->
      <div class="w-full max-w-[320px] space-y-4">
        <!-- Student Login -->
        <button class="w-full bg-white rounded-xl py-4 flex items-center justify-center gap-4 shadow-md hover:shadow-lg transition-all active:scale-95" @click="goToStudentLogin">
          <User class="w-7 h-7 text-[#333]" />
          <span class="text-[#1a1a1a] text-lg font-bold tracking-wide">Student Login</span>
        </button>

        <!-- Staff Login -->
        <button class="w-full bg-white rounded-xl py-4 flex items-center justify-center gap-4 shadow-md hover:shadow-lg transition-all active:scale-95">
          <Users class="w-8 h-8 text-[#333]" />
          <span class="text-[#1a1a1a] text-lg font-bold tracking-wide">Staff Login</span>
        </button>
      </div>

      <!-- Continue as Guest -->
      <div class="mt-8">
        <button class="text-white text-base font-bold hover:underline underline-offset-4 decoration-2 transition-all">
          Continue as Guest
        </button>
      </div>

    </main>
  </div>
</template>

<style scoped>
/* We use standard fonts and Tailwind standard classes. 
   The shadow on the UCARes logo is handled via drop-shadow utilities. */
</style>