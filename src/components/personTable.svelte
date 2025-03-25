<script>
	// @ts-nocheck
	import axios from "axios";
	import { addToast } from "../stores/toastStore";
	import { BASE_URL } from "../config";

	const { persons, fetchPersons } = $props();

	async function handleEdit(id) {
        try {
            const res = await axios.put(`${BASE_URL}/person?id=${id}`);
            if(!res){

            }
            fetchPersons();
            addToast('success', 'Person updated Successfully.');
        } catch (error) {
            console.log(error);
			addToast('error', 'Person updation failed.');
        }
    }

	async function handleDelete(id) {
		try {
			const res = await axios.delete(`${BASE_URL}/person?id=${id}`);
			if (!res) {
				addToast('error', 'Person deletion failed.');
			}

			fetchPersons();
			addToast('success', 'Person deleted Successfully.');
		} catch (error) {
			console.log(error);
			addToast('error', 'Person deletion failed.');
		}
	}
</script>

<div class="overflow-x-auto">
	<table class="w-full rounded-lg border border-gray-300 shadow-lg">
		<thead class="bg-gray-200 text-left text-gray-700">
			<tr class="border-b border-gray-300">
				<th class="p-3"><input type="checkbox" class="h-5 w-5" /></th>
				<th class="p-3">Name</th>
				<th class="p-3">Job</th>
				<th class="p-3">Email</th>
				<th class="p-3">Religion</th>
				<th class="p-3">Caste</th>
				<th></th>
			</tr>
		</thead>

		<tbody class="divide-y divide-gray-300">
			{#each persons as person}
				<tr class="hover:bg-gray-100">
					<td class="p-3"><input type="checkbox" class="h-5 w-5" /></td>
					<td class="p-3 font-semibold">{person?.name}</td>
					<td class="max-w-xs truncate p-3">{person?.job}</td>
					<td class="p-3">{person?.email}</td>
					<td class="p-3">{person?.religion.name}</td>
					<td class="p-3">{person?.caste?.name}</td>
					<td class="flex justify-center space-x-2 p-3">
						<a href={`/persons/${person?._id}`}
							class="rounded-md bg-blue-500 px-3 py-1 text-sm text-white"
						>
							Edit
						</a>
						<button
							onclick={() => handleDelete(person?._id)}
							class="rounded-md bg-red-500 px-3 py-1 text-sm text-white"
						>
							Delete
						</button>
					</td>
				</tr>
			{:else}
				<tr>
					<td colspan="5" class="p-3 text-center text-gray-500">No religions added yet.</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
