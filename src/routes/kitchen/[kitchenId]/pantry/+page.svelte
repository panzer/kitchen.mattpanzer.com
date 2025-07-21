<script lang="ts">
	import { Badge, Heading, Card, P } from 'flowbite-svelte';
	import SmartCombobox from '$lib/components/SmartCombobox/SmartCombobox.svelte';
	import { items as patryItems, type PantryItemOption } from '$lib/mock_data/pantry';
	let selectedItems: PantryItemOption[] = $state([]);
</script>

<Heading tag="h2">Your Pantry</Heading>
<div
	class="grid grid-cols-1
		gap-4
		sm:grid-cols-2
		md:grid-cols-3
		lg:grid-cols-4
		xl:grid-cols-6
		2xl:grid-cols-8"
>
	{#each selectedItems as item}
		<Card class="m-1 flex flex-row items-center p-1">
			<div>
				<P class="m-2 h-8 w-8 text-center text-lg">{item?.emoji}</P>
			</div>
			<div class="justify-left m-2 flex flex-col">
				<Heading tag="h6" class="mb-1 font-semibold text-gray-800">{item.name}</Heading>
				<P class="text-sm text-gray-600">1 unit</P>
			</div>
		</Card>
	{/each}
</div>

<SmartCombobox
	data={patryItems}
	onSelect={(item) => selectedItems.push(item)}
	stringifyData={(item) => item.name}
	wrapperClass="m-2 w-64"
/>
