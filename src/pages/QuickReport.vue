<script setup>
import { TriangleAlert, ChevronDown } from '@lucide/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'; // New import

const router = useRouter(); // New line

// --- Form State ---
const formData = ref({
  name: '',
  concern: '',
  location: '',
  description: '',
  urgency: '',
  isConfirmed: false,
  isUpdating: false,
  image: null,
  trackingCode: '' // New field
})

const imageFile = ref(null)

// --- Dropdown Options ---
const concernOptions = [
  'ELECTRICAL (LIGHTS, OUTLETS, ETC.)',
  'PLUMBING (LEAKS, CLOGGED SINKS, ETC.)',
  'SAFETY HAZARD',
  'OTHER'
]

const urgencyOptions = [
  { label: 'LOW', color: 'text-emerald-500' },
  { label: 'MEDIUM', color: 'text-amber-400' },
  { label: 'HIGH', color: 'text-orange-500' },
  { label: 'URGENT', color: 'text-red-500' }
]

// --- Actions ---
const generateTrackingCode = () => {
  let code = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let i = 0; i < 5; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

const handleFileUpload = (event) => {
  imageFile.value = event.target.files[0];
}

const handleSubmit = async () => {
  // Generate tracking code
  formData.value.trackingCode = generateTrackingCode(); // New line

  if (imageFile.value) {
    const reader = new FileReader();
    const filePromise = new Promise((resolve, reject) => {
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(imageFile.value);
    });

    try {
      formData.value.image = await filePromise;
    } catch (error) {
      console.error('Error reading file:', error);
      alert('There was an error processing the image.');
      return;
    }
  }

  try {
    localStorage.setItem('quickReportData', JSON.stringify(formData.value));
    console.log('Report Submitted and saved to localStorage:', formData.value);
    alert('Report submitted successfully and saved!');
    router.push('/thankyou'); // New line for redirection
  } catch (error) {
    console.error('Error saving to localStorage or redirecting:', error);
    alert('There was an error saving your report or redirecting.');
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#059669] flex justify-center font-sans">
    <div class="w-full max-w-md px-6 py-8 pb-12">
      
      <!-- ==================== HEADER SECTION ==================== -->
      <div class="flex flex-col items-center text-center mb-8">
        <!-- UCARes Logo -->
        <div class="relative w-full max-w-[150px] aspect-[2/1] mb-4 flex justify-center items-center select-none">
          <div class="absolute left-0 top-0 bottom-0 w-[55%] flex items-center justify-center bg-transparent">
            <span class="text-[70px] leading-none font-black text-white tracking-tighter drop-shadow-[0_6px_6px_rgba(0,0,0,0.2)]" style="font-family: Arial, Helvetica, sans-serif;">UC</span>
          </div>
          <div class="absolute right-0 top-[15%] bottom-[15%] w-[45%] flex flex-col justify-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
            <span class="text-[18px] leading-none font-bold tracking-tight" style="font-family: Arial, Helvetica, sans-serif;">AReS</span>
          </div>
          <div class="absolute right-[48%] bottom-[10%] w-8 h-8 bg-[#059669] rounded-full z-[-1]"></div>
          <div class="absolute right-[42%] bottom-[25%] w-6 h-6 bg-[#059669] rounded-full z-[-1]"></div>
        </div>

        <!-- Title & Subtitle -->
        <div class="flex items-center gap-2 mb-1">
          <TriangleAlert class="w-8 h-8 text-white" />
          <h1 class="text-3xl font-bold text-white">Quick Report</h1>
        </div>
        <p class="text-emerald-100 text-sm font-light">Kindly fill out the report form.</p>
        
        <!-- Job Order Number -->
        <div class="mt-4">
          <h2 class="text-white text-xl font-bold tracking-wide">JOB ORDER #00001</h2>
        </div>
      </div>

      <!-- ==================== FORM SECTION ==================== -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Name -->
        <div class="space-y-1">
          <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
            Name (Optional)
          </label>
          <input 
            v-model="formData.name"
            type="text" 
            class="w-full px-4 py-3 rounded-md border-0 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
          />
        </div>

        <!-- Nature of Concern (Select) -->
        <div class="space-y-1">
          <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
            Nature of Concern
          </label>
          <div class="relative">
            <select 
              v-model="formData.concern"
              class="w-full px-4 py-3 rounded-md border-0 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm appearance-none bg-white"
            >
              <option value="" disabled selected>- PLEASE SELECT -</option>
              <option v-for="opt in concernOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
          </div>
        </div>

        <!-- Location / Room -->
        <div class="space-y-1">
          <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
            Location / Room:
          </label>
          <input 
            v-model="formData.location"
            type="text" 
            placeholder="e.g. Room 204, 2nd Floor"
            class="w-full px-4 py-3 rounded-md border-0 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
          />
        </div>

        <!-- Describe the Issue -->
        <div class="space-y-1">
          <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
            Please Describe the Issue
          </label>
          <textarea 
            v-model="formData.description"
            rows="5"
            placeholder="Insert text here."
            class="w-full px-4 py-3 rounded-md border-0 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm resize-none"
          ></textarea>
        </div>

        <!-- How Urgent (Select) -->
        <div class="space-y-1">
          <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
            How Urgent is the Concern?
          </label>
          <div class="relative">
            <select 
              v-model="formData.urgency"
              class="w-full px-4 py-3 rounded-md border-0 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm appearance-none bg-white"
            >
              <option value="" disabled selected></option>
              <option v-for="opt in urgencyOptions" :key="opt.label" :value="opt.label" :class="opt.color">
                {{ opt.label }}
              </option>
            </select>
            <ChevronDown class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none" />
          </div>
        </div>

        <!-- Upload Photo -->
        <div class="space-y-1">
            <label class="block text-xs font-semibold text-white uppercase tracking-wide ml-1">
                    Upload Photo
            </label>
        <div class="bg-white rounded-md shadow-sm px-3 py-2 flex items-center justify-between">
            <label class="border border-gray-400 rounded px-3 py-0.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
                    Upload
                <input type="file" class="hidden" @change="handleFileUpload" />
            </label>
            </div>
        <p class="text-[10px] text-emerald-200 text-right mt-1">Max 10MB | .jpeg, .png, .heic files only</p>
        </div>

        <!-- ==================== CHECKBOXES ==================== -->
        <div class="space-y-4 pt-2">
          
          <!-- Confirmation Checkbox -->
          <label class="flex items-start gap-3 cursor-pointer group">
            <div class="relative flex items-center justify-center w-6 h-6 mt-0.5 shrink-0">
              <input 
                type="checkbox" 
                v-model="formData.isConfirmed"
                class="peer appearance-none w-full h-full bg-white rounded shadow-sm checked:bg-white transition-all cursor-pointer"
              />
              <!-- Custom Checkmark -->
              <svg 
                class="absolute w-4 h-4 text-[#059669] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-white text-sm leading-relaxed select-none">
              I confirm that this report is not intended to mislead, disrupt, or provide false information.
            </span>
          </label>

          <!-- Update Checkbox -->
          <label class="flex items-start gap-3 cursor-pointer group">
            <div class="relative flex items-center justify-center w-6 h-6 mt-0.5 shrink-0">
              <input 
                type="checkbox" 
                v-model="formData.isUpdating"
                class="peer appearance-none w-full h-full bg-white rounded shadow-sm checked:bg-white transition-all cursor-pointer"
              />
              <!-- Custom Checkmark -->
              <svg 
                class="absolute w-4 h-4 text-[#059669] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span class="text-white text-sm leading-relaxed select-none">
              I would like to receive updates regarding this report.
            </span>
          </label>

        </div>

        <!-- ==================== SUBMIT BUTTON ==================== -->
        <div class="pt-4 flex justify-center">
          <button 
            type="submit"
            class="bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold text-lg py-3 px-12 rounded-full shadow-lg transition-all active:scale-95 w-full max-w-[280px]"
          >
            Submit Report
          </button>
        </div>

      </form>

    </div>
  </div>
</template>