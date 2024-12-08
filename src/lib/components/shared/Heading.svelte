<script lang="ts">
	export type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
	export let level: HeaderLevel = 'h1'; // Default to h1
	export let text: string = ''; // The text to display
	export let textWidth: string = 'max-w-none'; // Default to no width restrictions (Tailwind class)
	export let className: string = ''; // Additional classes for customization
  </script>
  
  <svelte:head>
	<style>
	  :global(h1), :global(h2), :global(h3), :global(h4), :global(h5), :global(h6) {
		margin: 0; /* Removes default browser margin for headings */
	  }
	</style>
  </svelte:head>
  
  {@html `<${level} class="font-bold ${textWidth} ${className}">${text}</${level}>`}