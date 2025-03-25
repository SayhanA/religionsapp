<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import CastesForm from '../../components/CastesForm.svelte';
	import CastesTable from '../../components/CastesTable.svelte';
	import { BASE_URL } from '../../config';
	import axios from 'axios';

	// @ts-nocheck

	let religionId = 'Unknown ID';
	let religionName = 'Unknown Religion';
	let id = '';
	let name = '';
	let description = '';
	let castes = [];
	let baseUrl = BASE_URL;

	if (typeof window !== 'undefined') {
		const params = new URLSearchParams(window.location.search);
		religionId = params.get('religionId') || 'Unknown ID';
		religionName = decodeURIComponent(params.get('religionName') || 'Unknown Religion');
	}

	async function fetchCastes() {
		const response = await axios.get(`${baseUrl}/casts?id=${religionId}`);
		castes = response?.data;
	}

	function handleEdit(caste) {
		id = caste._id;
		name = caste.name;
		description = caste.description;
	}

	function resetForm() {
		(id = ''), (name = ''), (description = '');
	}

	onMount(fetchCastes);
</script>

<svelte:head>
	<title>Calendar | Caste</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main class="p-10">
	<section class="">
		<h1 class="text-2xl font-bold">Caste Page</h1>
		<p class="mt-2 text-gray-700">
			<strong>Selected Religion ID:</strong>
			{religionId}, <strong>{religionName}</strong>
		</p>
	</section>

	<CastesForm
		{religionId}
		{religionName}
		castId={id}
		castName={name}
		castDes={description}
		{handleEdit}
		{fetchCastes}
		{resetForm}
	/>

	{#if id === ''}
		<CastesTable {castes} {handleEdit} {fetchCastes} />
	{/if}
</main>
