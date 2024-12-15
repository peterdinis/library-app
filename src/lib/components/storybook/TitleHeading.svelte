<script lang="ts">
export const heading = "SPŠT Knižnica";
export const level: 1 | 2 | 3 | 4 | 5 | 6 = 1;
</script>
  
  <svelte:element
	this={`h${level}`}
	class="text-3xl font-black leading-tight tracking-tighter text-gray-900 dark:text-gray-50 md:w-7/12 lg:text-6xl xl:text-8xl"
  >
	{heading}
  </svelte:element>
  
  <style>
	h1, h2, h3, h4, h5, h6 {
	  transition: all 0.3s ease;
	}
  </style>
  