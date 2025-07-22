<script>
	import { A, Navbar, NavBrand, NavUl, NavLi } from 'flowbite-svelte';
	import { FireSolid } from 'flowbite-svelte-icons';

	import { LinkHandler } from '$lib';
</script>

<Navbar>
	<NavBrand>
		<FireSolid class="mr-3 h-6 sm:h-9" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
			>Chef's Choice</span
		>
	</NavBrand>
	<NavUl>
		<NavLi>
			<A href={LinkHandler('/')}>Home</A>
		</NavLi>
	</NavUl>
</Navbar>
