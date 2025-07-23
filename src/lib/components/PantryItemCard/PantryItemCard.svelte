<script lang="ts">
	import { Badge, Heading, Card, P } from 'flowbite-svelte';
	import { type ItemCardSlots } from './theme';

	import { type PantryItemOption } from '$lib/mock_data/pantry';

	type PantryItemCardProps = {
		item: PantryItemOption;
		size?: 'sm' | 'md' | 'lg';
		isSelected?: boolean;
		isEditable?: boolean;
	};

	let { item, isSelected, isEditable }: PantryItemCardProps = $props();
</script>

<Card class="m-1 flex flex-row items-center p-1" color={isSelected ? 'primary' : undefined}>
	<div>
		<P class="m-2 h-8 w-8 text-center text-lg">{item?.emoji}</P>
	</div>
	<div class="justify-left m-2 flex flex-col">
		<Heading tag="h6" class="mb-1 font-semibold text-gray-800">{item.name}</Heading>
		<P class="text-sm text-gray-600">1 unit</P>
	</div>
</Card>
