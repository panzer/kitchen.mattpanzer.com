<script lang="ts">
	import '../app.css';
	import NavigationTop from '$lib/components/NavigationTop.svelte';
	// import {} from '@tailwindcss/vite';

	export const prerender = true;

	let { children } = $props();
</script>

<NavigationTop />
{@render children()}
