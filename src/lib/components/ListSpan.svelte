<script>
	export let secondary = false;
</script>

<span
	class={`${!secondary ? 'rounded-xl bg-red-600 px-3 py-2 text-yellow-300' : 'rounded-xl border border-red-600 px-3 py-2 text-red-600'}`}
	><slot></slot></span
>
