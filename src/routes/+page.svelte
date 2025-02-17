<script>
	import { numberStore } from '$lib/stores/numberStore.js';
	import Numpad from '$lib/components/Numpad.svelte';
	import List from '$lib/components/List.svelte';
</script>

<div class="flex h-screen w-full flex-col justify-between bg-yellow-400 text-red-600">
	<List />
	<div class="w-full">
		<div class="flex justify-end px-4 py-4 text-3xl">{$numberStore}</div>
		<Numpad />
	</div>
</div>
