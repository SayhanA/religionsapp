<script>
	const style = 'rounded-md bg-[#5965fe] px-5 py-3 text-white';
</script>

<svelte:head>
	<title>Calander | Home</title>
	<meta name="robots" content="noindex nofollow" />
</svelte:head>

<main>
	<section class="mx-auto mt-20 flex max-w-[500px] flex-col justify-center">
		<h1 class="text-center text-[1.9rem] font-bold">
			Religions, Castes and Birth date in SvelteKit
		</h1>

		<div class="nav mt-3 flex w-full flex-col items-center gap-5">
			<a href="/religions" class={style}>Religions</a>
			<a href="/religioncaste" class={style}>ReligionsCaste</a>
			<a href="/birthdate" class={style}>Birth day</a>
			<a href="/persons" class={style}>Persons</a>
		</div>
	</section>
</main>

<style>
</style>
