<script lang="ts">
	import { Heading, Card, P } from 'flowbite-svelte';
	import type { PantryItemOption } from '$lib/mock_data/pantry';

	type PantryItemCardProps = {
		item: PantryItemOption;
		size?: 'sm' | 'md' | 'lg';
		isSelected?: boolean;
		isEditable?: boolean;
	};

	let { item, isSelected, isEditable, size = 'lg' }: PantryItemCardProps = $props();

	const cardSelected = isSelected ? 'border-primary-500 border-2' : '';
	const commonCard = 'm-1 flex flex-row items-center p-1 hover:bg-gray-100 ' + cardSelected;
	const sizeConfig = {
		lg: {
			card: commonCard,
			emoji: 'm-2 h-8 w-8 text-center text-lg',
			heading: 'mb-1 font-semibold text-gray-800',
			p: 'text-sm text-gray-600',
			emojiShow: true
		},
		md: {
			card: commonCard,
			emoji: 'm-2 h-6 w-6 text-center text-base',
			heading: 'leading-tight font-medium text-gray-800',
			p: 'text-sm text-gray-500',
			emojiShow: !!item?.emoji
		},
		sm: {
			card: 'flex items-center space-x-2',
			emoji: '',
			heading: `font-semibold ${isSelected ? ' text-primary-700' : ''}`,
			p: 'text-sm font-normal text-gray-500',
			emojiShow: false
		}
	};
</script>

{#if size === 'lg' || size === 'md'}
	<Card class={sizeConfig[size].card} size={size === 'md' ? 'xs' : undefined}>
		{#if sizeConfig[size].emojiShow}
			<P class={sizeConfig[size].emoji}>{item.emoji}</P>
		{/if}
		<div class="m-2 flex flex-col justify-center">
			<Heading tag={'h6'} class={sizeConfig[size].heading}>{item.name}</Heading>
			<P class={sizeConfig[size].p}>1 unit</P>
		</div>
	</Card>
{:else}
	<span class={sizeConfig.sm.card}>
		<span class={sizeConfig.sm.heading}>{item.name}</span>
		<span class={sizeConfig.sm.p}>1 unit</span>
	</span>
{/if}
