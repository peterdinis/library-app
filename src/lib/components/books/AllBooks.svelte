<script lang="ts">
import * as Card from "$lib/components/ui/card/index.js";
import Button from "../ui/button/button.svelte";
</script>

<div
  class="mx-auto ml-3 mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
<Card.Root class="w-[400px] bg-slate-100 dark:bg-slate-800">
    <Card.Header>
      <Card.Title class="flex justify-center items-center font-bold text-4xl">Kniha nadpis</Card.Title>
    </Card.Header>
    <Card.Content class="mt-4 break-all">Autor/ka meno</Card.Content>
    <Card.Footer class="flex justify-between">
      <Button variant="default">
		 <a href="/books/1">Detail knihy</a>
	  </Button>
    </Card.Footer>
  </Card.Root>
</div>
