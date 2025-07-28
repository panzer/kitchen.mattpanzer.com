<script lang="ts">
	import { Heading } from 'flowbite-svelte';
	import PantryItemCard from '$lib/components/PantryItemCard';
	import RecipeItem from '$lib/components/RecipeItem.svelte';

	let pantryItem = { name: 'Mushroom', emoji: '🍄' };
	let recipeItem = {
		name: 'Farfalle Pasta',
		quantity: { count: 8, unit: 'oz' },
		modifier: '',
		isOptional: false
	};
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

<hr />
<br />
<Heading tag="h3">RecipeItem</Heading>
<RecipeItem item={recipeItem} />
