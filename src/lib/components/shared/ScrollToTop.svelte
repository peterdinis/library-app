<script lang="ts">
	import { onMount } from "svelte";
	import { ArrowUp } from 'lucide-svelte';

	let isVisible = false;

	const scrollToTop = (): void => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	onMount(() => {
		const handleScroll = (): void => {
			isVisible = window.scrollY > 200;
		};
	
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	</script>
	
	{#if isVisible}
		<div class="icon-position">
			<button class="icon-style" on:click={scrollToTop} aria-label="Scroll to top">
				<ArrowUp />
			</button>
		</div>
	{/if}
	