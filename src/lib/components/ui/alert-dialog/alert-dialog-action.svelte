<script lang="ts">
import { buttonVariants } from "$lib/components/ui/button/index.js";
import { cn } from "$lib/utils.js";
import type { AlertDialog as AlertDialogPrimitive } from "bits-ui";

const {
	ref = $bindable(null),
	class: className,
	...restProps
}: AlertDialogPrimitive.ActionProps = $props();
</script>

<AlertDialogPrimitive.Action bind:ref class={cn(buttonVariants(), className)} {...restProps} />
