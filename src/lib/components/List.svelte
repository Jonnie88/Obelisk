<script>
	import ListItem from '$lib/components/ListItem.svelte';
	import data from '$lib/data.json';
	import { numberStore } from '$lib/stores/numberStore.js';
	console.log(data);

	$: filteredDataNrk = data.Norrköping.filter((item) =>
		item.PostNr.toString().includes($numberStore.toString())
	);

	// Reaktiv filtrering som söker efter delsträng i PNR
	$: filteredDataLin = data.Postnr.filter((item) =>
		item.PNR.toString().includes($numberStore.toString())
	);

	$: combinedFilteredData = [...filteredDataNrk, ...filteredDataLin];
</script>

<ul class="h-auto px-4 py-4">
	{#each combinedFilteredData.slice(0, 5) as item}
		<ListItem line={item} />
	{/each}
</ul>
