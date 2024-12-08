<script lang="ts">
import schollImage from "$lib/img/main.png";
import { onMount } from "svelte";

let isVisible = false;

onMount(() => {
	requestAnimationFrame(() => {
		isVisible = true;
	});
});
</script>

<style>
	.fade-in {
		opacity: 0;
		transform: scale(0.9);
		transition: opacity 0.5s ease, transform 0.5s ease;
	}

	.fade-in.visible {
		opacity: 1;
		transform: scale(1);
	}
</style>

<div class="container relative mx-auto px-4 xl:px-0">
	<div class={`flex flex-col-reverse md:flex-row fade-in ${isVisible ? 'visible' : ''}`}>
		<div class="md:w-3/5 md:pt-24 lg:py-32">
			<h1 class="text-center text-3xl font-black leading-tight tracking-tighter text-gray-900 dark:text-gray-50 md:w-7/12 md:text-left lg:text-6xl xl:text-8xl">
				SPŠT Knižnica
			</h1>
			<h2 class="prose py-4 text-center text-lg text-gray-700 dark:text-gray-400 md:w-8/12 md:py-8 md:text-left lg:text-2xl">
				<q>Knihy sú jedinečne prenosné kúzlo</q> - Stephen King
			</h2>
			<div class="flex justify-center md:justify-start">
				<button class="mr-4 h-10 px-8 focus-visible:ring-ring p-2 ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-black dark:text-zinc-50 hover:bg-secondary/90 shadow">
					<a href="/books">Zobraziť všetky knihy</a>
				</button>
				<button class="focus-visible:ring-ring p-2 h-10 px-8 ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 shadow">
					<a href="https://www.spsbj.sk/" target="_blank" rel="noopener noreferrer">
						Školská stránka
					</a>
				</button>
			</div>
		</div>

		<div class="m-auto flex h-64 items-center overflow-hidden sm:w-2/5 md:h-auto fade-in">
			<img src={schollImage} alt="Scholl homepage" class="w-full h-auto" loading="eager" />
		</div>
	</div>
</div>