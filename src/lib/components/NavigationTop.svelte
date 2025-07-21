<script>
	import { Navbar, NavBrand, NavUl, NavLi } from 'flowbite-svelte';
	import { FireSolid } from 'flowbite-svelte-icons';
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
			<a href="/">Home</a>
		</NavLi>
	</NavUl>
</Navbar>
