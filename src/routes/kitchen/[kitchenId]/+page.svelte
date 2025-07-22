<script lang="ts">
	import { Heading, A } from 'flowbite-svelte';
	import { page } from '$app/state';

	import { LinkHandler } from '$lib';
</script>

<Heading>Kitchen {page.params['kitchenId']}</Heading>
<A href={LinkHandler(`/kitchen/${page.params['kitchenId']}/pantry`)}>Pantry</A>
<A href={LinkHandler(`/kitchen/${page.params['kitchenId']}/eat`)}>Eat</A>

<A href={LinkHandler(`/kitchen/${page.params['kitchenId']}/eat/add-to-cart`)}>Cart</A>
