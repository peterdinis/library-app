<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navigation from '$lib/components/shared/Navigation.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<Navigation />
{@render children()}
