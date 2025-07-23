<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import PantryItemCard from '$lib/components/PantryItemCard';

	let pantryItem = { name: 'Mushroom', emoji: '🍄' };
</script>

<Heading>Component Library</Heading>

<hr />
<br />
<Heading tag="h3">PantryItemCard</Heading>
<PantryItemCard item={pantryItem} />

<PantryItemCard item={pantryItem} size="md" />
<PantryItemCard item={pantryItem} size="md" isSelected />

<PantryItemCard item={pantryItem} size="sm" />
<PantryItemCard item={pantryItem} size="sm" isSelected />
