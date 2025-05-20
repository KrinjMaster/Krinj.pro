<script lang="ts">
	import AboutSection from '$components/sections/AboutSection.svelte';
	import MainSection from '$components/sections/MainSection.svelte';
	import WorkSection from '$components/sections/WorkSection.svelte';
	import IntroAnimation from '$sections/IntroAnimation.svelte';
	import { onMount } from 'svelte';

	let isSeen = $state(true);

	onMount(() => {
		setTimeout(() => {
			isSeen = false;
		}, 3500);
	});
</script>

{#if isSeen}
	<IntroAnimation />
{/if}

<MainSection />

{#if !isSeen}
	<AboutSection />
	<WorkSection />
{/if}
