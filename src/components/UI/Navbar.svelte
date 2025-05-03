<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible = $state(false);

	const scrollFunction = () => {
		const mainSection = document.getElementById('main');

		if (mainSection) {
			const mainSectionRect = mainSection.getBoundingClientRect();

			isVisible = mainSectionRect.top >= 0 && mainSectionRect.bottom <= window.innerHeight;
		}
	};
</script>

<svelte:body on:scroll={() => console.log('true')} />
<div
	class={`${isVisible ? 'visible' : 'invisible'} fixed top-0 z-[1] flex h-16 w-full items-center rounded-md border bg-gray-400/5 bg-clip-padding text-start backdrop-blur-sm backdrop-filter`}
>
	<h1 class="text-5xl font-extrabold">ABOUT ME</h1>
</div>
