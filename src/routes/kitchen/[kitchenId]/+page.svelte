<script lang="ts">
	import { Heading, A } from 'flowbite-svelte';
	import { page } from '$app/state';
</script>

<Heading>Kitchen {page.params['kitchenId']}</Heading>
<A href={`/kitchen/${page.params['kitchenId']}/pantry`}>Pantry</A>
<A href={`/kitchen/${page.params['kitchenId']}/eat`}>Eat</A>

<A href={`/kitchen/${page.params['kitchenId']}/eat/add-to-cart`}>Cart</A>
