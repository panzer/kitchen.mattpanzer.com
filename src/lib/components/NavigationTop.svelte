<script>
	import { A, Navbar, NavBrand, NavUl, NavLi } from 'flowbite-svelte';

	import { LinkHandler } from '$lib';
</script>

<Navbar>
	<NavBrand>
		<img src={LinkHandler('/favicon.svg')} class="mr-3 h-6 sm:h-9" alt="fire on a plate" />
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
