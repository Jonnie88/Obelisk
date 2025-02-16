<script>
	export let classList;
	export let numKey;
	import { numberStore } from '$lib/stores/numberStore.js';

	// Funktion för att lägga till siffror
	function addNumber(num) {
		if (num === 'C') {
			clearNumber();
			return;
		}
		numberStore.update((n) => parseInt(`${n}${num}`));
	}

	// Funktion för att rensa numret
	function clearNumber() {
		numberStore.set(0);
	}
</script>

<button
	class={`numpad__key || bg-yellow-400 py-3 shadow-md hover:bg-yellow-600 focus:outline-none active:-translate-x-1 active:-translate-y-1 active:shadow-sm ${classList}`}
	on:click={() => {
		addNumber(numKey);
	}}>{numKey}</button
>
