<script lang="ts">
import { cn } from "$lib/utils.js";
import type { AlertDialog as AlertDialogPrimitive } from "bits-ui";

type $$Props = AlertDialogPrimitive.TitleProps;

const className: $$Props["class"] = undefined;
export const level: $$Props["level"] = "h3";
export { className as class };
</script>

<AlertDialogPrimitive.Title class={cn("text-lg font-semibold", className)} {level} {...$$restProps}>
	<slot />
</AlertDialogPrimitive.Title>
