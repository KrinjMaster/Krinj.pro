<script lang="ts">
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

	let textSize = $state(0);

	onMount(() => {
		resizeText();
		animate(
			`.intro-letter1`,
			{ y: [0, -textSize] },
			{ delay: stagger(0.1, { startDelay: 0.25 }), duration: 0.5, ease: 'circIn' }
		);
		animate(
			`.intro-letter2`,
			{ y: [textSize, 0] },
			{ delay: 0.6, duration: 0.5, ease: 'circOut' }
		).finished.then(() => {
			animate(
				'#letter_m2',
				{ x: [0, textSize * 0.55] },
				{ delay: 0.25, duration: 0.5, type: 'spring', stiffness: 80, ease: 'easeInOut' }
			).finished.then(() => {
				animate(
					'#intro-section',
					{ y: [0, '-100%'] },
					{ duration: 0.5, ease: 'circIn', delay: 0.25 }
				);
			});
		});

		animate(
			'#lower_logo',
			{
				y: [textSize * 0.295, textSize * 0.295],
				clipPath: ['inset(100% 0 0 0)', 'inset(0 0 0 0)']
			},
			{ ease: 'circIn', delay: 2.5, duration: 0.15 }
		);
	});

	const resizeText = () => {
		textSize = window.innerWidth / 3;
	};
</script>

<svelte:window on:resize={resizeText} />
<div
	id="intro-section"
	style={`font-size: ${textSize}px`}
	class="fixed top-0 z-[100] flex h-screen w-screen flex-col items-center justify-center gap-0 bg-[#BBBEFE] font-sans font-extrabold"
>
	<div style={`line-height: ${textSize * 0.85}px`} class="absolute flex overflow-clip">
		<h1 id="letter_m1" class="intro-letter1">M</h1>
		<h1 id="secondary_text" class="intro-letter1">a</h1>
		<h1 id="secondary_text" class="intro-letter1">x</h1>
	</div>
	<div style={`line-height: ${textSize * 0.85}px`} class="flex w-full justify-center overflow-clip">
		<h1 id="letter_m2" class="intro-letter2">M</h1>
		<h1 id="secondary_text2" class="intro-letter2 invisible">a</h1>
		<h1 id="secondary_text2" class="intro-letter2 invisible">x</h1>
	</div>
	<h1
		id="lower_logo"
		style={`width: ${textSize / 1.35}px; height: ${textSize / 6}px`}
		class="absolute right-0 left-0 mx-auto border bg-white"
	>
		_
	</h1>
</div>
