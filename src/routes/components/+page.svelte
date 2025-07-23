<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import PantryItemCard from '$lib/components/PantryItemCard';

	let pantryItem = { name: 'Brocoli', emoji: '🥦' };
</script>

<Heading>Component Library</Heading>

<hr />
<br />
<Heading tag="h3">PantryItemCard</Heading>
<PantryItemCard item={pantryItem} />
