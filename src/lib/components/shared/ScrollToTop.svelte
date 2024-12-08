<script lang="ts">
	import { onMount } from "svelte";
  
	// State to control button visibility
	let isVisible = false;

	// Function to scroll to the top of the page
	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
  
	// Monitor scroll events to toggle button visibility
	onMount(() => {
		const handleScroll = (): void => {
			isVisible = window.scrollY > 200;
		};
  
		window.addEventListener("scroll", handleScroll);

		// Cleanup on component destruction
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
</script>

{#if isVisible}
	<div class="icon-position">
		<div class="icon-style" on:click={scrollToTop}>
			<span aria-label="Scroll to top" role="button">↑</span>
		</div>
	</div>
{/if}