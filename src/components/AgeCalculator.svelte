<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	import { birthdateStore } from '../store';

	const days = Array.from({ length: 31 }, (_, i) => i + 1);
	const months = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];
	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: currentYear - 1904 }, (_, i) => currentYear - i);

	const dispatch = createEventDispatcher();

	let birthdate;
	birthdateStore.subscribe(value => {
		birthdate = value;
	});

	function getMonthNumber(month) {
		return months.indexOf(month) + 1;
	}

	function isLeapYear(year) {
		return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	}

	function calculateAge() {
		let { selectedDay, selectedMonth, selectedYear } = birthdate;
		let errorMessage = '', age = null, fullAge = '';

		let maxDays = {
			Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
			Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31
		}[selectedMonth];

		if (selectedMonth === 'Feb') {
			maxDays = isLeapYear(selectedYear) ? 29 : 28;
		}

		if (selectedDay > maxDays) {
			errorMessage = `Invalid day! ${selectedMonth} has only ${maxDays} days.`;
		} else {
			const birthDate = new Date(selectedYear, getMonthNumber(selectedMonth) - 1, selectedDay);
			const today = new Date();

			let years = today.getFullYear() - birthDate.getFullYear();
			let months = today.getMonth() - birthDate.getMonth();
			let days = today.getDate() - birthDate.getDate();

			if (days < 0) {
				months--;
				days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
			}
			if (months < 0) {
				years--;
				months += 12;
			}

			if (years < 12) {
				errorMessage = 'You must be at least 12 years old.';
			} else {
				age = `${days}.${months}.${years}`;
				fullAge = `You are ${years} years old.`;
			}
		}

		birthdateStore.set({ ...birthdate, age, fullAge, errorMessage });
		dispatch('update', { ...birthdate, age, fullAge, errorMessage });
	}
</script>

<div class="flex min-h-full w-full flex-col">
	<div class="pb-2 text-left">
		<div class="text-gray-900" id="birth-head">Date of Birth</div>
		<div class="flex justify-between gap-5">
			<!-- Day Selector -->
			<div class="flex w-full items-center justify-between gap-5 rounded-[6px] border border-[#ccd0d5] p-1.5">
				<label class="date_lbl" for="day">Day</label>
				<select id="day" class="date_input ml-auto outline-none dark:text-gray-900"
					bind:value={birthdate.selectedDay}
					on:change={calculateAge}>
					{#each days as day}
						<option value={day}>{day}</option>
					{/each}
				</select>
			</div>

			<!-- Month Selector -->
			<div class="flex w-full items-center justify-between gap-5 rounded-[6px] border border-[#ccd0d5] p-1.5">
				<label class="date_lbl" for="month">Month</label>
				<select id="month" class="date_input outline-none dark:text-gray-900"
					bind:value={birthdate.selectedMonth}
					on:change={calculateAge}>
					{#each months as month}
						<option value={month}>{month}</option>
					{/each}
				</select>
			</div>

			<!-- Year Selector -->
			<div class="flex w-full items-center justify-between gap-5 rounded-[6px] border border-[#ccd0d5] p-1.5">
				<label class="date_lbl" for="year">Year</label>
				<select id="year" class="date_input outline-none dark:text-gray-900"
					bind:value={birthdate.selectedYear}
					on:change={calculateAge}>
					{#each years as year}
						<option value={year}>{year}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
</div>
