<script lang="ts">
	import { Button, Card, Heading, List, P } from 'flowbite-svelte';
	import { CirclePlusOutline } from 'flowbite-svelte-icons';
	import DishPromotion from '$lib/components/DishPromotion.svelte';
	import breakfastList from '$lib/mock_data/lists/breakfast';
</script>

<Heading>Choose</Heading>

<Heading tag="h3">{breakfastList.title}</Heading>
<P>{breakfastList.subtitle}</P>
<div class="lg:flex-no-wrap m-2 flex flex-col flex-wrap gap-2 lg:flex-row lg:overflow-scroll">
	{#each breakfastList.dishes as dish}
		<DishPromotion {dish} cartInfo={{ count: 3 }} />
	{/each}
</div>
