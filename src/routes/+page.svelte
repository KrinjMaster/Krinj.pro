<script lang="ts">
	import AboutSection from '$components/sections/AboutSection.svelte';
	import MainSection from '$components/sections/MainSection.svelte';
	import WorkSection from '$components/sections/WorkSection.svelte';
	import IntroAnimation from '$sections/IntroAnimation.svelte';
	import { onMount } from 'svelte';

	let isSeen = $state(true);
	let isRestSeen = $state(false);

	onMount(() => {
		const parent = document.querySelector('body');

		if (parent) {
			parent.style.overflow = 'hidden';
			setTimeout(() => {
				isSeen = false;
				parent.style.overflow = 'auto';
			}, 3500);
		}
	});
</script>

{#if isSeen}
	<IntroAnimation />
{/if}

<MainSection />
<AboutSection />
<WorkSection />
