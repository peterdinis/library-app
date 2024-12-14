<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div
  class="mx-auto ml-3 mt-5 grid gap-8 overflow-x-auto pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Create project</Card.Title>
      <Card.Description>Deploy your new project in one-click.</Card.Description>
    </Card.Header>
    <Card.Content>Content</Card.Content>
    <Card.Footer class="flex justify-between">
      <button>Cancel</button>
    </Card.Footer>
  </Card.Root>
</div>
