<script lang="ts">
import { ModeWatcher } from "mode-watcher";
import "../app.css";
import Navigation from "$lib/components/shared/Navigation.svelte";
import ScrollToTop from "$lib/components/shared/ScrollToTop.svelte";

const { children } = $props();
</script>

<ModeWatcher />
<Navigation />
<ScrollToTop />
{@render children()}
