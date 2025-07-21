<script>
	import { Button, Card, Heading, P } from 'flowbite-svelte';
	import { CirclePlusOutline } from 'flowbite-svelte-icons';
</script>

<Card horizontal size="lg" class="m-4 flex h-32 flex-row justify-between">
	<img
		class="aspect-square"
		src={'https://www.allrecipes.com/thmb/HWPuDHueWrkYS5sYOoenl6R4i4U=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3651781-810e0b61706349279c2fe7d7eca7363e.jpg'}
		alt="something delicious"
	/>
	<div class="m-2 flex flex-col gap-4">
		<Heading tag="h3">Fried Chicken</Heading>
		<P>Crispy, juicy, and delicious fried chicken</P>
	</div>
	<Button pill size="xs" class="m-4 aspect-square h-12 self-center">
		<CirclePlusOutline />
	</Button>
</Card>

<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
