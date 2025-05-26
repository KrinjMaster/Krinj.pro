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
		}, 3700);
	});
</script>

{#if isSeen}
	<IntroAnimation />
{:else}
	<MainSection />
	<AboutSection />
	<WorkSection />
{/if}
