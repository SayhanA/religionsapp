<script>
// @ts-nocheck
	import { onMount } from 'svelte';
	import { BASE_URL } from '../config';
	import { selectedReligion, selectedCaste } from '../store.js';

	let religons = [];
	let castes = [];
	let baseUrl = BASE_URL;

	async function fetchReligionCaste() {
		try {
			const response = await fetch(`${baseUrl}/religions`);
			const data = await response.json();
			religons = data?.data;

			if (religons.length > 0) {
				selectedReligion.set(religons[0]); // Update global state
				await fetchCaste(religons[0]._id);
			}
		} catch (error) {
			console.error('Error fetching religions:', error);
		}
	}

	async function fetchCaste(religionId) {
		try {
			const response = await fetch(`${baseUrl}/casts?id=${religionId}`);
			if (!response.ok) throw new Error('Failed to fetch caste data');

			const data = await response.json();
			castes = data;

			if (castes.length > 0) {
				selectedCaste.set(castes[0]); // Update global state
			}
		} catch (error) {
			console.error('Error fetching caste data:', error);
			castes = [];
		}
	}

	function handleSelect(id) {
		const religion = religons.find((r) => r._id === id);
		selectedReligion.set(religion);
		fetchCaste(id);
	}

	function handleCasteSelect(id) {
		const caste = castes.find((c) => c._id === id);
		selectedCaste.set(caste);
	}

	onMount(fetchReligionCaste);
</script>

<div class="rounded bg-[rgb(20,100,111)] p-2">
	<div class="flex dark:text-white">
		<div class="w-full rounded bg-[rgb(20,100,111)] p-1">
			<div class="flex space-x-4 rounded border border-blue-500 p-3">
				<div class="flex-1">
					<label for="religion-select" class="block font-medium text-gray-900">
						Select a Religion:
					</label>
					<select
						id="religion-select"
						class="mt-2 mb-2 w-full max-w-xs rounded border bg-white px-3 py-1 dark:text-gray-900"
						on:change={(event) => handleSelect(event.target.value)}
					>
						{#each religons as religion}
							<option value={religion._id} selected={$selectedReligion?._id === religion._id}>
								{religion.name}
							</option>
						{/each}
					</select>
				</div>

				<div class="flex-1">
					<label for="caste-select" class="block font-medium text-gray-900">
						Select a Caste:
					</label>
					<select
						id="caste-select"
						class="mt-2 mb-2 w-full max-w-xs rounded border bg-white px-3 py-1 dark:text-gray-900"
						disabled={castes.length === 0}
						on:change={(event) => handleCasteSelect(event.target.value)}
					>
						{#each castes as caste}
							<option value={caste._id} selected={$selectedCaste?._id === caste._id}>
								{caste.name}
							</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
	</div>
</div>