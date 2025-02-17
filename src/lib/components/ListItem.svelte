<script>
	import ListSpan from './ListSpan.svelte';
	export let line;
</script>

<li class="my-4 flex justify-between">
	<ListSpan>{line.Stycke || line.Platsnamn}</ListSpan>
	<ListSpan classSet={line.Paket || line.Adress ? '' : 'invisible'} secondary={true}
		>{line.Paket || line.Adress}</ListSpan
	>
	<span class="rounded-full bg-green-600 px-3 py-3 text-white">SP</span>
</li>
