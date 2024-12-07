<script lang="ts">
    import { Home, School2 } from "lucide-svelte";
  </script>
  
  <div class="overflow-y-hidden">
    <div class="bg-gray-100 py-12 dark:bg-card">
      <div class="max-w-8xl container mx-auto">
        <div
          tabindex="0"
          aria-label="group of cards"
          class="flex flex-wrap items-center justify-center focus:outline-none gap-6 sm:justify-between"
        >
          <div
            tabindex="0"
            aria-label="card 1"
            class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform opacity-0 animate-fade-in-scale"
          >
            <Home class="h-7 w-7" />
            <h4
              tabindex="0"
              class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50 focus:outline-none"
            >
              Doma Objednáš
            </h4>
          </div>
          <div
            tabindex="0"
            aria-label="card 2"
            class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform opacity-0 animate-fade-in-scale"
          >
            <School2 class="h-7 w-7" />
            <h4
              tabindex="0"
              class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50 focus:outline-none"
            >
              V škole vyzdhvineš
            </h4>
          </div>
          <div
            tabindex="0"
            aria-label="card 3"
            class="flex flex-col items-center px-6 py-6 focus:outline-none sm:w-1/2 md:w-1/4 md:py-0 transform opacity-0 animate-fade-in-scale"
          >
            <span
              role="img"
              aria-label="eyes"
              class="text-2xl"
            >
              👀
            </span>
            <h4
              tabindex="0"
              class="pt-5 text-center text-lg font-medium leading-6 text-gray-800 dark:text-blue-50 focus:outline-none"
            >
              Ľahké že ?
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  