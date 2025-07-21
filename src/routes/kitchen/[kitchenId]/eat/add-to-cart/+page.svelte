<script lang="ts">
	import { Button, Heading, P, Card, Checkbox, Radio, Stepper } from 'flowbite-svelte';
	import avocadoToast from '$lib/mock_data/dishes/avocadoToast';

	let count = $state(1);
</script>

<Heading>{avocadoToast.name}</Heading>

{#if avocadoToast.selections}
	{#each avocadoToast.selections as selection}
		<Card class="m-2 p-2">
			<label id={selection.id}>
				<Heading tag="h4"
					>{selection.title}{#if selection.isRequired}<span class="text-red-600">*</span
						>{/if}</Heading
				>
				<P>{selection.subtitle}</P>
				{#if selection.isBoolean}
					<Radio name={selection.id} value="yes">Yes</Radio>
					<Radio name={selection.id} value="no">No</Radio>
				{:else if selection.maximumSelectionCount == 1}
					{#each selection.options as option}
						<Radio value={option.id} name={selection.id}>{option.name}</Radio>
					{/each}
				{:else}
					<P class="text-grey-500">Choose up to {selection.maximumSelectionCount}</P>
					{#each selection.options as option}
						<Checkbox value={option.id} name={selection.id}>{option.name}</Checkbox>
					{/each}
				{/if}
			</label>
		</Card>
	{/each}
{:else}
	<P>Ready to add it to your meal?</P>
{/if}

<div class="m-4 flex flex-row justify-center">
	<Button
		color="alternative"
		class="w-12"
		onclick={() => {
			count -= 1;
		}}>-</Button
	>
	<P class="m-4">{count}</P>
	<Button
		color="alternative"
		class="w-12"
		onclick={() => {
			count += 1;
		}}>+</Button
	>
</div>

<div class="flex-column flex justify-center">
	<Button color="dark">Add To Menu</Button>
</div>
