<script lang="ts">
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';
	import { isFinished } from '$src/store/ui';

	let textSize = $state(0);

	onMount(() => {
		textSize = window.innerWidth / 3;

		animate(
			`.intro-letter1`,
			{ y: [0, '-110%'] },
			{ delay: stagger(0.1, { startDelay: 0.25 }), duration: 0.5, ease: 'circIn' }
		);
		animate(
			`.intro-letter2`,
			{ y: ['110%', 0] },
			{ delay: stagger(0.1, { startDelay: 0.6 }), duration: 0.5, ease: 'circOut' }
		).finished.then(() => {
			animate(
				`.intro-letter2`,
				{ y: [0, '-110%'] },
				{ delay: stagger(0.1), duration: 0.5, ease: 'circIn' }
			).finished.then(() => {
				animate(
					'#intro-section',
					{ y: [0, '-100%'] },
					{ duration: 0.5, ease: 'circIn', delay: 1 }
				).finished.then(() => setTimeout(() => isFinished.set(true), 100));
			});
		});
		animate(`#main-logo`, { y: ['110%', 0] }, { delay: 2, duration: 0.5, ease: 'circOut' });
	});
</script>

<div
	id="intro-section"
	style={`font-size: ${textSize}px; line-height: ${textSize * 0.8}px`}
	class="fixed top-0 z-[100] flex h-screen w-screen flex-col items-center justify-center gap-0 bg-[#525AFF] font-sans font-extrabold"
>
	<div class="absolute flex overflow-clip">
		<h1 id="letter_m1" class="intro-letter1">M</h1>
		<h1 id="secondary_text" class="intro-letter1">a</h1>
		<h1 id="secondary_text" class="intro-letter1">x</h1>
	</div>
	<div class="flex w-full justify-center overflow-clip">
		<h1 id="letter_m2" class="intro-letter2">M</h1>
		<h1 id="secondary_text2" class="intro-letter2">a</h1>
		<h1 id="secondary_text2" class="intro-letter2">x</h1>
	</div>
	<div class="absolute flex w-full justify-center overflow-clip">
		<img id="main-logo" loading="lazy" src="/logo.svg" style={`width: ${textSize * 0.8}px`} />
	</div>
</div>
