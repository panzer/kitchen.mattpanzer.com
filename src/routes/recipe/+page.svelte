<script lang="ts">
	// Svelte 5 runes mode
	import {
		Button,
		Card,
		Heading,
		P,
		Badge,
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell
	} from 'flowbite-svelte';
	import { BookmarkOutline, ShareAllOutline } from 'flowbite-svelte-icons';

	import PantryItemCard from '$lib/components/PantryItemCard';

	// Example recipe data (replace with real data or props)
	const recipe = {
		title: 'Classic Spaghetti Carbonara',
		heroImage:
			'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
		description:
			'A creamy, savory Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
		servings: 4,
		metadata: {
			prepTime: '15 min',
			cookTime: '20 min',
			difficulty: 'Easy',
			cuisine: 'Italian'
		},
		ingredients: [
			'400g spaghetti',
			'150g pancetta',
			'2 large eggs',
			'1 cup grated Parmesan cheese',
			'2 cloves garlic, minced',
			'Salt & freshly ground black pepper',
			'Fresh parsley, chopped (optional)'
		],
		instructions: [
			'Cook spaghetti in a large pot of salted boiling water until al dente. Reserve 1/2 cup pasta water, then drain.',
			'In a pan, cook pancetta over medium heat until crispy. Add garlic and sauté for 1 minute.',
			'In a bowl, whisk eggs and Parmesan together.',
			'Add drained spaghetti to the pan with pancetta. Remove from heat.',
			'Quickly pour egg mixture over pasta, tossing rapidly to coat (add reserved pasta water as needed for creaminess).',
			'Season with salt and plenty of black pepper. Garnish with parsley and extra cheese.'
		],
		tags: ['Dinner'],
		relatedRecipes: [
			{
				title: 'Pesto Pasta',
				image:
					'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80'
			},
			{
				title: 'Lasagna',
				image:
					'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80'
			}
		]
	};

	function saveRecipe() {
		// Placeholder for save logic
		alert('Recipe saved!');
	}

	function shareRecipe() {
		// Placeholder for share logic
		alert('Share link copied!');
	}
</script>

<Card class="mx-auto my-8 max-w-3xl shadow-lg">
	<img src={recipe.heroImage} alt={recipe.title} class="h-64 w-full rounded-t-lg object-cover" />
	<div class="p-6">
		<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
			<Heading tag="h2" class="text-3xl font-bold">{recipe.title}</Heading>
			<div class="flex gap-2">
				<Button color="light" size="sm" onclick={saveRecipe} aria-label="Save recipe">
					<BookmarkOutline class="mr-1" /> Save
				</Button>
				<Button color="light" size="sm" onclick={shareRecipe} aria-label="Share recipe">
					<ShareAllOutline class="mr-1" /> Share
				</Button>
			</div>
		</div>
		<P class="mt-2 text-gray-700">{recipe.description}</P>

		<div class="mt-4 flex flex-wrap gap-4">
			<Badge color="primary">Servings: {recipe.servings}</Badge>
			<Badge color="gray">Prep: {recipe.metadata.prepTime}</Badge>
			<Badge color="gray">Cook: {recipe.metadata.cookTime}</Badge>
			<Badge color="green">{recipe.metadata.difficulty}</Badge>
			<Badge color="red">{recipe.metadata.cuisine}</Badge>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
			<div>
				<Heading tag="h4" class="mb-2">Ingredients</Heading>
				<ul class="list-inside list-disc space-y-1">
					{#each recipe.ingredients as ingredient}
						<li>{ingredient}</li>
					{/each}
				</ul>
			</div>
			<div>
				<Heading tag="h4" class="mb-2">Instructions</Heading>
				<ol class="list-inside list-decimal space-y-2">
					{#each recipe.instructions as step, i}
						<li><span class="font-semibold">Step {i + 1}:</span> {step}</li>
					{/each}
				</ol>
			</div>
		</div>

		{#if recipe.relatedRecipes?.length}
			<div class="mt-10">
				<Heading tag="h5" class="mb-4">Related Recipes</Heading>
				<div class="flex flex-wrap gap-4">
					{#each recipe.relatedRecipes as related}
						<Card class="w-40 flex-shrink-0">
							<img
								src={related.image}
								alt={related.title}
								class="h-24 w-full rounded-t object-cover"
							/>
							<div class="p-2">
								<P class="truncate">{related.title}</P>
							</div>
						</Card>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</Card>
