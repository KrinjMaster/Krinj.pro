<script lang="ts">
	import AboutSection from '$components/sections/AboutSection.svelte';
	import ContactsSection from '$components/sections/ContactsSection.svelte';
	import MainSection from '$components/sections/MainSection.svelte';
	import WorkSection from '$components/sections/WorkSection.svelte';
	import IntroAnimation from '$sections/IntroAnimation.svelte';
	import { isFinished } from '$src/store/ui';
</script>

{#if !$isFinished}
	<IntroAnimation />
{:else}
	<MainSection />
	<AboutSection />
	<WorkSection />
	<ContactsSection />
{/if}
