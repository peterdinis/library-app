<script lang="ts">
import { Home, School } from "lucide-svelte";
</script>

<div class="overflow-y-hidden">
  <div class="bg-gray-100 py-12 dark:bg-card">
    <div class="max-w-8xl container mx-auto">
      <div
        aria-label="group of cards"
        class="flex flex-wrap items-center justify-center focus:outline-none gap-6 sm:justify-between"
      >
        <div
          aria-label="card 1"
          class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform animate-fade-in-scale"
        >
          <Home class="h-7 w-7" />
          <h4
            class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50"
          >
            Doma Objednáš
          </h4>
        </div>

        <!-- Card 2 -->
        <div
          aria-label="card 2"
          class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform animate-fade-in-scale"
        >
          <School class="h-7 w-7" />
          <h4
            class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50"
          >
            V škole vyzdhvineš
          </h4>
        </div>
        
        <div
          aria-label="card 3"
          class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform animate-fade-in-scale"
        >
          <span
            role="img"
            aria-label="eyes"
            class="text-2xl"
          >
            👀
          </span>
          <h4
            class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50"
          >
            Ľahké že ?
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- <style>
  @layer utilities {
    /* Keyframes for fade-in with scale */
    @keyframes fade-in-scale {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    /* Add animation class */
    .animate-fade-in-scale {
      animation: fade-in-scale 0.5s ease-in-out forwards;
    }
  }
</style> -->