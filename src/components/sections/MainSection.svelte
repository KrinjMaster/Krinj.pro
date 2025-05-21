<script lang="ts">
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

	let age = new Date().getFullYear() - 2008;

	onMount(() => {
		animate(
			'#first_curve',
			{
				startOffset: ['-100%', '-30%']
			},
			{ duration: 5, repeat: Infinity, ease: 'linear' }
		);
		animate(
			'#second_curve',
			{
				startOffset: ['-30%', '40%']
			},
			{ duration: 5, repeat: Infinity, ease: 'linear' }
		);
		animate(
			'#third_curve',
			{
				startOffset: ['40%', '110%']
			},
			{ duration: 5, repeat: Infinity, ease: 'linear' }
		);

		animate(
			'.greeting-text p',
			{
				y: ['100%', 0],
				opacity: [0, 1]
			},
			{
				duration: 0.5,
				delay: stagger(0.03, { startDelay: 3.2 })
			}
		);

		animate(
			'.short-bio p',
			{
				opacity: [0, 1]
			},
			{
				duration: 1,
				delay: stagger(0.05, { startDelay: 3.2 })
			}
		);
	});
</script>

<section
	id="main"
	class="flex h-screen w-full flex-col-reverse justify-between font-stretch-150% xl:flex-row"
>
	<div class="flex h-full w-full xl:w-fit">
		<div class="flex w-full flex-col justify-start sm:justify-center">
			<span
				class="greeting-text lg:text-7x flex flex-wrap justify-center gap-0 overflow-clip pl-2.5 text-5xl font-extrabold sm:text-6xl md:text-7xl xl:justify-start xl:text-8xl 2xl:text-9xl"
			>
				<p>H</p>
				<p>i</p>
				<p>,</p>
				<span>&nbsp;</span>
				<p>I</p>
				<p>'</p>
				<p>m</p>
				<span>&nbsp;</span>
				<p>M</p>
				<p>a</p>
				<p>x</p>
			</span>
			<div class="flex items-end gap-1.5 text-center">
				<span
					class="short-bio textl-sm flex w-full flex-wrap justify-center px-2.5 pl-4.5 font-normal sm:text-sm md:text-sm lg:text-lg xl:w-fit xl:justify-start xl:text-lg 2xl:text-xl"
				>
					<p>I'm</p>
					<span>&nbsp;</span>
					<p>a</p>
					<span>&nbsp;</span>
					<p>{age}</p>
					<span>&nbsp;</span>
					<p>a</p>
					<span>&nbsp;</span>
					<p>year</p>
					<span>&nbsp;</span>
					<p>old</p>
					<span>&nbsp;</span>
					<p>developer</p>
					<span>&nbsp;</span>
					<p>who</p>
					<span>&nbsp;</span>
					<p>strives</p>
					<span>&nbsp;</span>
					<p>to</p>
					<span>&nbsp;</span>
					<p>create</p>
					<span>&nbsp;</span>
					<p>something</p>
					<span>&nbsp;</span>
					<p
						class="bg-gradient-to-r from-violet-400 to-violet-500 bg-clip-text font-extrabold text-transparent"
					>
						beautiful
					</p>
				</span>
			</div>
		</div>
	</div>
	<div class="flex h-[60vh] w-full flex-col p-5 xl:h-full xl:w-[35rem]">
		<img
			src="/profile.jpg"
			alt="profile picture"
			class="motion-preset-slide-left-lg motion-opacity-in-0 motion-duration-1000 motion-delay-3500 m-auto w-96 rounded-full sm:w-[25rem] md:w-[25rem] lg:w-[30rem] xl:w-[25rem] 2xl:w-[40rem]"
		/>
	</div>
	<svg
		class="motion-preset-fade-lg motion-delay-3600 absolute top-0 right-0 z-[1] ml-auto h-[10rem] w-[22rem] xl:h-[16rem] xl:w-[35rem]"
		viewBox="0 0 601 258"
	>
		<path
			id="curve"
			stroke="none"
			fill="none"
			d="M 0 0 C 210.271484 36.975601 168.967117 234.275818 301 248 C 476.584412 266.25116 507.734375 84.593643 601 87"
		/>
		<text class="fill-[#525AFF] text-[25px] font-stretch-100%">
			<textPath
				id="first_curve"
				href="#curve"
				stroke-width="3px"
				stroke="#525AFF"
				letter-spacing="10px"
				startOffset="-100%">FRONTEND DEVELOPER</textPath
			>
			<textPath
				id="second_curve"
				href="#curve"
				stroke-width="3px"
				stroke="#525AFF"
				letter-spacing="10px"
				startOffset="-30%">FRONTEND DEVELOPER</textPath
			>
			<textPath
				id="third_curve"
				href="#curve"
				stroke-width="3px"
				stroke="#525AFF"
				letter-spacing="10px"
				startOffset="40%">FRONTEND DEVELOPER</textPath
			>
		</text>
	</svg>
</section>
