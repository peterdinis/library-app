<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div
  class="mx-auto ml-3 mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
  <Card.Root class="w-[450px] bg-slate-100 dark:bg-slate-800">
    <Card.Header>
      <Card.Title class="flex justify-center items-center font-bold text-3xl">Create project</Card.Title>
    </Card.Header>
    <Card.Content class="mt-4 break-all">Content</Card.Content>
    <Card.Footer class="flex justify-between">
      <button class="">
		Detail knihy
	  </button>
    </Card.Footer>
  </Card.Root>
</div>
