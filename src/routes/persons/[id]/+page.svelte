<script>
	// @ts-nocheck

	import PersonForm from '../../../components/PersonForm.svelte';
	import { page } from '$app/stores';
	import axios from 'axios';
	import { BASE_URL } from '../../../config';
	import { onMount } from 'svelte';

	let id;
	let person = {};
	let loading = true;

	$: id = $page.url.pathname.split('/').pop();

	async function fetchPerson() {
		loading = true;
		try {
			const result = await axios.get(`${BASE_URL}/person/${id}`);
			if (result.data) {
				person = { ...result.data };
			}
		} catch (error) {
			console.error('Error fetching person:', error);
		} finally {
			loading = false;
		}
	}

	onMount(fetchPerson);

	function handlePersonAdded() {
		fetchPerson();
	}
</script>

<section>
	{#if loading}
		<p>Loading...</p>
	{:else}
		<PersonForm personAdded={handlePersonAdded} {person} />
	{/if}
</section>
