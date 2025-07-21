<script lang="ts">
	import { Button, Card, Heading, P, Indicator } from 'flowbite-svelte';
	import { CirclePlusOutline } from 'flowbite-svelte-icons';
	import type { Dish, DishCartInfo } from '$lib/types';

	let { dish, cartInfo }: { dish: Dish; cartInfo?: DishCartInfo } = $props();
</script>

<Card
	href={`/kitchen/x/eat/add-to-cart`}
	horizontal
	class="relative m-4 flex h-24 w-auto flex-none flex-row justify-between sm:max-w-full md:w-md"
>
	<img class="aspect-square w-24 rounded-l-lg" src={dish.imageUrl} alt="something delicious" />
	<div class="m-2 flex flex-col">
		<Heading tag="h4">{dish.name}</Heading>
		<P class="min-w-0 truncate">{dish.description}</P>
	</div>
	<Button color="alternative" size="xs" class="m-2 aspect-square h-8 self-center">
		<CirclePlusOutline />
	</Button>
	{#if cartInfo?.count}
		<Indicator color="blue" border size="xl" placement="top-right">
			<span class="text-xs font-bold text-white">{cartInfo?.count}</span>
		</Indicator>
	{/if}
</Card>
