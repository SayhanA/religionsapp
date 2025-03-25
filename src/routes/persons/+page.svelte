<script>
	// @ts-nocheck

	import axios from 'axios';
	import AgeCalculator from '../../components/AgeCalculator.svelte';
	import ReligionCasteSelector from '../../components/ReligionCasteSelector.svelte';
	import { selectedReligion, selectedCaste, birthdateStore } from '../../store';
	import { BASE_URL } from '../../config';
	import { onMount } from 'svelte';
	import Spinner from '../../components/Spinner.svelte';
	import PersonTable from '../../components/personTable.svelte';
	import { addToast } from '../../stores/toastStore';
	import PersonForm from '../../components/PersonForm.svelte';

	let persons = [];
	let loading = true;

	// fetch all persons data
	async function fetchPersons() {
		loading = true;
		try {
			const response = await axios.get(`${BASE_URL}/person`);
			persons = response.data;
			loading = false;
			console.log(response.data);
		} catch (error) {
			console.error('Error fetching persons:', error);
			loading = false;
		}
	}

	function handlePersonAdded() {
		console.log('A person was added! You can perform any action here.');
		fetchPersons();
	}

	onMount(fetchPersons);
</script>

<section class=" py-12 sm:px-6 lg:px-8">
	<!-- Heading -->
	<div class="flex w-full items-center justify-between">
		<h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">Person Manager</h2>
	</div>

	<!-- Add new person form -->
	<PersonForm personAdded={handlePersonAdded}/>
</section>
<section class=" py-12 sm:px-6 lg:px-8">
	{#if loading}
		<Spinner />
	{:else}
		<PersonTable {persons} {fetchPersons} />
	{/if}
</section>
