<script lang="ts">
	import { motion } from 'svelte-motion';
	import { Button } from '$lib/components/ui/button'; // Adjust path to your ShadCN UI setup
	import schollImage from '$lib/img/main.png'; // Update path as per your project structure

	const homepageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
</script>

<motion.div
	variants={homepageVariants}
	initial="hidden"
	animate="visible"
	class="container relative mx-auto px-4 xl:px-0"
>
	<div class="flex flex-col-reverse md:flex-row">
		<!-- Text Section -->
		<div class="md:w-3/5 md:pt-24 lg:py-32">
			<h1 class="text-center text-3xl font-black leading-tight tracking-tighter text-gray-900 dark:text-gray-50 md:w-7/12 md:text-left lg:text-6xl xl:text-8xl">
				SPŠT Knižnica
			</h1>
			<h2 class="prose py-4 text-center text-lg text-gray-700 dark:text-gray-400 md:w-8/12 md:py-8 md:text-left lg:text-2xl">
				<q>Knihy sú jedinečne prenosné kúzlo</q> - Stephen King
			</h2>
			<div class="flex justify-center md:justify-start">
				<Button variant="default" class="mr-4">
					<a href="/books">Zobraziť všetky knihy</a>
				</Button>
				<Button variant="secondary">
					<a href="https://www.spsbj.sk/" target="_blank" rel="noopener noreferrer">
						Školská stránka
					</a>
				</Button>
			</div>
		</div>

		<!-- Image Section -->
		<div class="m-auto flex h-64 items-center overflow-hidden sm:w-2/5 md:h-auto">
			<img src={schollImage} alt="Scholl homepage" class="w-full h-auto" loading="eager" />
		</div>
	</div>
</motion.div>
