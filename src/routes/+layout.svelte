<script lang="ts">
import { ModeWatcher } from "mode-watcher";
import "../app.css";
import Navigation from "$lib/components/shared/Navigation.svelte";
const { children } = $props();
</script>

<ModeWatcher />
<Navigation />
{@render children()}
