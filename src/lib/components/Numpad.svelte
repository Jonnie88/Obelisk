<script>
	import NumpadKey from '$lib/components/NumpadKey.svelte';

	let numpadKeyArr = [
		{ num: 'Lin' },
		{ num: 'Nrk' },
		{ num: 'Sp' },
		{ num: 7 },
		{ num: 8 },
		{ num: 9 },

		{ num: 4 },
		{ num: 5 },
		{ num: 6 },

		{ num: 1 },
		{ num: 2 },
		{ num: 3 },
		{ num: 0, class: 'col-span-2' },
		{ num: 'C' }
	];
</script>

<div class="numpad || grid w-full grid-cols-3 grid-rows-4 gap-[1px] bg-red-600 text-xl">
	{#each numpadKeyArr as numpadKey}
		<NumpadKey classList={numpadKey?.class} numKey={numpadKey.num} />
	{/each}
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<div class="bg-yellow-400" />
</div>
