<script>
	import { LinkHandler } from '$lib';
	import {
		A,
		Button,
		Card,
		Heading,
		P,
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell
	} from 'flowbite-svelte';
	import { CirclePlusOutline } from 'flowbite-svelte-icons';
</script>

<Heading>Welcome</Heading>

<br />
<Heading tag="h4">What is this?</Heading>
<P
	>I'm playing around with some new technologies to create an app that helps me make delicious
	home-cooked meals. The goal is to save money, eat healthier, and take the stress out of grocery
	shopping.</P
>

<br />
<Heading tag="h4">Tech Stack?</Heading>
<Table>
	<TableHead><TableHeadCell>Tech</TableHeadCell><TableHeadCell>Used for</TableHeadCell></TableHead>
	<TableBody>
		<TableBodyRow>
			<TableBodyCell>Svelte 5</TableBodyCell><TableBodyCell>Framework / Compiler</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Typescript</TableBodyCell><TableBodyCell>Programming Language</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Flowbite</TableBodyCell><TableBodyCell>UI Component Library</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Tailwind CSS</TableBodyCell><TableBodyCell>Styling</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Sveltekit</TableBodyCell><TableBodyCell>Application Framework</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Vite</TableBodyCell><TableBodyCell>Build Tool + Dev Server</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>pnpm</TableBodyCell><TableBodyCell>Package Manager</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>ESLint</TableBodyCell><TableBodyCell>Code Linting</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>GitHub Actions</TableBodyCell><TableBodyCell>CI/CD</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>GitHub Pages</TableBodyCell><TableBodyCell>Hosting</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>

<A href={LinkHandler('/recipe')}>Recipe Example</A>
<A href={LinkHandler('/components')}>Component Library</A>

<br />
<Heading tag="h4">Component Playground</Heading>
<Card horizontal size="lg" class="m-4 flex h-32 flex-row justify-between">
	<img
		class="aspect-square"
		src={'https://www.allrecipes.com/thmb/HWPuDHueWrkYS5sYOoenl6R4i4U=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3651781-810e0b61706349279c2fe7d7eca7363e.jpg'}
		alt="something delicious"
	/>
	<div class="m-2 flex flex-col gap-4">
		<Heading tag="h5">Fried Chicken</Heading>
		<P>Crispy, juicy, and delicious fried chicken</P>
	</div>
	<Button pill size="xs" class="m-4 aspect-square h-12 self-center">
		<CirclePlusOutline />
	</Button>
</Card>
