<script lang="ts">
	import { P } from 'flowbite-svelte';
	import { type RecipeItem, stringifyQuantifier } from '$lib/mock_data/pantry';

	let { item }: { item: RecipeItem } = $props();
</script>

<div class="contents items-center gap-2">
	<!-- {#if item.quantity.count > 0} -->
	<span class="font-semibold">{stringifyQuantifier(item.quantity, 'short')}</span>
	<!-- {/if} -->
	<span>{item.modifier ? `${item.modifier} ` : ''}{item.name}</span>
	{#if item.isOptional}
		<span class="ml-1 text-sm text-gray-500">(optional)</span>
	{/if}
</div>
