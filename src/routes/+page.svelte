<script lang="ts">
	import AboutSection from '$components/sections/AboutSection.svelte';
	import MainSection from '$components/sections/MainSection.svelte';
	import IntroAnimation from '$sections/IntroAnimation.svelte';
	import { onMount } from 'svelte';

	let isSeen = $state(true);

	onMount(() => {
		setTimeout(() => {
			isSeen = false;
		}, 2500);
	});
</script>

<!-- {#if isSeen} -->
<IntroAnimation />
<!-- {/if} -->

<div class="flex h-screen w-full snap-y snap-mandatory flex-col overflow-y-scroll">
	<!-- <MainSection /> -->
	<!-- {#if !isSeen} -->
	<!-- 	<AboutSection /> -->
	<!-- {/if} -->
</div>
