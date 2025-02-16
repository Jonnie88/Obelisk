<script>
	import { numberStore } from '$lib/stores/numberStore.js';
	import Numpad from '$lib/components/Numpad.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
</script>

<div class="flex h-screen w-full flex-col justify-between bg-yellow-400 text-red-600">
	<ul class="h-auto px-4 py-4">
		<ListItem />
		<ListItem />
	</ul>
	<div class="w-full">
		<div class="flex justify-end px-4 py-4 text-3xl">{$numberStore}</div>
		<Numpad />
	</div>
</div>
