<script>
	// @ts-nocheck

	import axios from 'axios';
	import { birthdateStore, selectedCaste, selectedReligion } from '../store';
	import AgeCalculator from './AgeCalculator.svelte';
	import ReligionCasteSelector from './ReligionCasteSelector.svelte';
	import { BASE_URL } from '../config';
	import { addToast } from '../stores/toastStore';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	export let person = {};
	export let personAdded;

	let name = '';
	let email = '';
	let company = '';
	let job = '';

	$: if (person) {
		name = person.name || '';
		email = person.email || '';
		company = person.company || '';
		job = person.job || '';
	}

	async function onSubmit(event) {
		event.preventDefault();

		let formData = {
			name,
			email,
			company,
			job,
			religion: $selectedReligion,
			caste: $selectedCaste,
			age: $birthdateStore.age
		};

		try {
			let response;
			if (Object.keys(person).length === 0) {
				// Create new person
				response = await axios.post(`${BASE_URL}/person`, formData);
			} else {
				console.log("hello.........................");
				// Update existing person
				response = await axios.put(`${BASE_URL}/person?id=${person?._id}`, formData);
			}

			if (response) {
				// resetForm();
				addToast('success', 'Person saved successfully.');
				personAdded();
				goto('/persons');
			}
		} catch (error) {
			addToast('error', 'Failed to save person.');
			console.log({ error });
		}
	}

	function resetForm() {
		(name = ''), (email = ''), (company = ''), (job = '');
	}
</script>

<form on:submit={onSubmit} class="flex w-full flex-col">
	<div class="form-control w-full max-w-xs">
		<label for="name" class="label"><span class="label-text">Name</span></label>
		<input
			type="text"
			name="name"
			bind:value={name}
			class="input input-primary input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="email" class="label"><span class="label-text">Email</span></label>
		<input
			type="email"
			name="email"
			bind:value={email}
			class="input input-primary input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="company" class="label"><span class="label-text">Company</span></label>
		<input
			type="text"
			name="company"
			bind:value={company}
			class="input input-primary input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label for="job" class="label"><span class="label-text">Job</span></label>
		<input
			type="text"
			name="job"
			bind:value={job}
			class="input input-primary input-bordered w-full max-w-xs"
		/>
	</div>

	<AgeCalculator />
	<ReligionCasteSelector />

	<button class="btn btn-primary mt-4 w-full max-w-xs" type="submit">Add Person</button>
</form>
