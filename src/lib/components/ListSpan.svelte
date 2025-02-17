<script>
	export let secondary = false;
	export let classSet = '';
</script>

<span
	class={`${
		secondary
			? 'rounded-xl border border-red-600 px-3 py-2 text-red-600'
			: 'rounded-xl bg-red-600 px-3 py-2 text-yellow-300'
	} ${classSet}`}
>
	<slot></slot>
</span>
