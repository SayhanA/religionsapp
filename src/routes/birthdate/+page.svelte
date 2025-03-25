<script>
	// @ts-nocheck
	import AgeCalculator from '../../components/AgeCalculator.svelte';
	import { birthdateStore } from '../../store';

	let birthdate;
	birthdateStore.subscribe(value => {
		birthdate = value;
	});

	function handleUpdate(event) {
		birthdateStore.set(event.detail);
	}
</script>

<svelte:head>
	<title>Calander | Birthdate</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<section class="py-12 sm:px-6 lg:px-8">
	<div class="flex w-full items-center justify-between">
		<h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">
			Date of Birth (Age minimum 12 years)
		</h2>
	</div>

	<!-- Pass store data and listen for updates -->
	<AgeCalculator on:update={handleUpdate} />

	<!-- Display Selected Date -->
	<h1 class="mt-5 text-xl font-semibold">Selected Birth Date:</h1>
	<p>Day: {birthdate.selectedDay}</p>
	<p>Month: {birthdate.selectedMonth}</p>
	<p>Year: {birthdate.selectedYear}</p>

	<!-- Display Age or Error -->
	{#if birthdate.errorMessage}
		<h2 class="mt-3 text-lg font-bold text-red-600">{birthdate.errorMessage}</h2>
	{:else if birthdate.age}
		<h2 class="mt-3 text-lg font-bold text-blue-600">{birthdate.age}</h2>
		<p class="text-gray-700">{birthdate.fullAge}</p>
	{/if}
</section>
