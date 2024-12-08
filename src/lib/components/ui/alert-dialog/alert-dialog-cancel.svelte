<script lang="ts">
import { buttonVariants } from "$lib/components/ui/button/index.js";
import { cn } from "$lib/utils.js";
import type { AlertDialog as AlertDialogPrimitive } from "bits-ui";

type $$Props = AlertDialogPrimitive.CancelProps;
type $$Events = AlertDialogPrimitive.CancelEvents;

const className: $$Props["class"] = undefined;
export { className as class };
</script>

<AlertDialogPrimitive.Cancel
	class={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
	{...$$restProps}
	on:click
	on:keydown
	let:builder
>
	<slot {builder} />
</AlertDialogPrimitive.Cancel>
