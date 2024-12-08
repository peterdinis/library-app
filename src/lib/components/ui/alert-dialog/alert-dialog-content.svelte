<script lang="ts">
import { cn, flyAndScale } from "$lib/utils.js";
import type { AlertDialog as AlertDialogPrimitive } from "bits-ui";
import * as AlertDialog from "./index.js";

type $$Props = AlertDialogPrimitive.ContentProps;

const className: $$Props["class"] = undefined;
export const transition: $$Props["transition"] = flyAndScale;
export const transitionConfig: $$Props["transitionConfig"] = undefined;
export { className as class };
</script>

<AlertDialog.Portal>
	<AlertDialog.Overlay />
	<AlertDialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			"bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg  sm:rounded-lg md:w-full",
			className
		)}
		{...$$restProps}
	>
		<slot />
	</AlertDialogPrimitive.Content>
</AlertDialog.Portal>
