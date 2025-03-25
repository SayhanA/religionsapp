import { writable } from 'svelte/store';

// Global state for religion and caste
export const selectedReligion = writable(null);
export const selectedCaste = writable(null);

// Global state for age calculator
export const birthdateStore = writable({
    selectedDay: 1,
    selectedMonth: 'Jan',
    selectedYear: new Date().getFullYear(),
    age: null,
    fullAge: '',
    errorMessage: ''
});
