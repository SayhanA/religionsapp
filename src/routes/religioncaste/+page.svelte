<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	import ReligionCasteSelector from '../../components/ReligionCasteSelector.svelte';
	import { selectedReligion, selectedCaste } from '../../store.js';

	onMount(() => {
		selectedCaste.subscribe((value) => {
			console.log(value);
		});
	});
</script>

<svelte:head>
	<title>Calendar | Religions Caste</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main>
	<section>
		<div class="flex min-h-full w-full flex-col py-12 sm:px-6 lg:px-8">
			<!-- Pass state as props -->
			<ReligionCasteSelector />

			{#if $selectedReligion}
				<div class="bg-[rgb(219 196 231)] rounded p-2">
					<h2>Selected Religion:</h2>
					<p>Religion: {$selectedReligion?.name}</p>
					<p>ReligionId: {$selectedReligion?._id}</p>

					{#if $selectedCaste}
						<p>Caste: {$selectedCaste?.name}</p>
						<p>CasteId: {$selectedCaste?._id}</p>
					{/if}
				</div>
			{/if}
		</div>
	</section>
</main>
