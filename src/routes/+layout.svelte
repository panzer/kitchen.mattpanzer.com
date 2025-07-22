<script lang="ts">
	import '../app.css';
	import NavigationTop from '$lib/components/NavigationTop.svelte';
	// import {} from '@tailwindcss/vite';

	let { children } = $props();
</script>

<NavigationTop />

<div class="p-4">
	{@render children()}
</div>
