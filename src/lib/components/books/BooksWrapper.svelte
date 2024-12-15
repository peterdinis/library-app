<script>
import AllBooks from "./AllBooks.svelte";
import BookSearch from "./BookSearch.svelte";
</script>
<div class="flex justify-center items-center">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5">Všetky knihy</h1>
</div>	

<div class="mt-5 flex justify-center items-center">
	<BookSearch />
</div>

<div class="mt-5">
	<AllBooks />
</div>