<script lang="ts">
	import { Menu, X } from "lucide-svelte";
	import { writable } from "svelte/store";
	import ThemeToggle from "./ThemeToggle.svelte";
	
	const navbar = writable(false);
</script>

<nav class="w-full bg-white dark:bg-background">
	<div class="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
		<div>
			<div class="flex items-center justify-between py-3 md:py-5">
				<a href="/" class="text-xl dark:text-blue-50 font-bold text-black">
					SPŠT Knižnica
				</a>
				<div class="md:hidden">
					<button
						class="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
						on:click={() => navbar.set(!$navbar)}
					>
						{#if $navbar}
							<X class="text-black dark:text-blue-50 h-6 font-bold" />
						{:else}
							<Menu class="text-black dark:text-blue-50 h-6 font-bold" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex md:flex-grow md:items-center">
			<ul class="ml-auto items-center justify-center space-x-6 md:flex md:space-y-0">
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/">Domov</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/books">Knihy</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/categories">Kategórie</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/publishers">Vydavateľstvá</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/authors">Spisovatelia</a>
				</li>
				<li>
					<ThemeToggle />
				</li>
			</ul>
		</div>

		<!-- Mobile Navigation -->
		<div
			class="mt-8 flex-1 justify-self-center pb-3 md:pb-0 md:hidden"
			class:hidden={!$navbar}
		>
			<ul class="items-center justify-center space-y-8">
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/">Domov</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/books">Knihy</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/categories">Kategórie</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/publishers">Vydavateľstvá</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<a href="/authors">Spisovatelia</a>
				</li>
				<li class="text-xl dark:text-blue-50 text-black hover:text-primary dark:hover:text-primary focus:text-primary dark:focus:text-primary active:text-primary dark:active:text-primary">
					<ThemeToggle />
				</li>
			</ul>
		</div>
	</div>
</nav>
