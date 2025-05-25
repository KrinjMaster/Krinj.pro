<script lang="ts">
	import { animate, hover, inView, scroll, stagger } from 'motion';
	import { onMount } from 'svelte';

	let travelDistance = $state(0);

	const calcTravelDistance = () => {
		if (window && document) {
			const element = document.querySelector('#section-num-1');

			if (element) {
				travelDistance = window.innerHeight - element?.clientHeight;
			}
		}
	};

	onMount(() => {
		calcTravelDistance();

		const sectionNum = document.querySelector('#section-num-1');
		const aboutText = document.querySelector('#about-text');
		const techLogos = document.querySelectorAll('#tech-logo');
		const logoHeading = document.querySelector('#logo-heading');

		inView('#about-text', () => {
			const element = document.querySelectorAll('#about-text p');

			if (element && aboutText) {
				animate(
					element,
					{ opacity: [0, 0, 1] },
					{ ease: 'easeOut', delay: stagger(0.03), duration: 1 }
				);
			}
		});

		inView('#tech-logo-list', () => {
			animate(logoHeading, { x: ['-10%', 0], opacity: [0, 1] }, { type: 'spring', duration: 1.5 });
			animate(
				techLogos,
				{
					opacity: [0, 0, 1]
				},
				{
					ease: 'easeOut',
					delay: stagger(0.06),
					duration: 1
				}
			);
		});

		if (sectionNum) {
			scroll(animate(sectionNum, { y: [travelDistance, 0] }, { ease: 'linear' }), {
				target: sectionNum
			});
		}

		hover('#tech-logo', (el) => {
			animate(
				el,
				{
					scale: [1, 1.2]
				},
				{
					type: 'spring',
					duration: 0.35
				}
			);

			return () => {
				animate(
					el,
					{
						scale: [1.2, 1]
					},
					{
						ease: 'easeOut',
						duration: 0.2
					}
				);
			};
		});
	});
</script>

<section
	id="about"
	class="flex h-screen w-full flex-col overflow-hidden border px-2.5 py-3.5 font-stretch-150%"
>
	<h1
		id="section-num-1"
		class="font-editundo xs:text-[15rem] xs:leading-[13rem] absolute top-[100vh] border text-[10rem] leading-[8rem] font-bold opacity-15 sm:text-[18rem] sm:leading-[16rem] md:text-[20rem] md:leading-[18rem] lg:text-[23rem] lg:leading-[21rem] xl:text-[17rem] xl:leading-[15rem] 2xl:text-[25rem] 2xl:leading-[20rem]"
	>
		01
	</h1>
	<div
		id="about-text"
		class="xs:text-xl flex flex-wrap justify-self-auto border border-red-500 text-sm font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
	>
		<p>Started</p>
		<span>&nbsp;</span>
		<p>career</p>
		<span>&nbsp;</span>
		<p>in</p>
		<span>&nbsp;</span>
		<p>2022,</p>
		<span>&nbsp;</span>
		<p>since</p>
		<span>&nbsp;</span>
		<p>then</p>
		<span>&nbsp;</span>
		<p>tried</p>
		<span>&nbsp;</span>
		<p>and</p>
		<span>&nbsp;</span>
		<p>fell</p>
		<span>&nbsp;</span>
		<p>in</p>
		<span>&nbsp;</span>
		<p>love</p>
		<span>&nbsp;</span>
		<p>with</p>
		<span>&nbsp;</span>
		<p>frontend.</p>
		<span>&nbsp;</span>
		<p>Although</p>
		<span>&nbsp;</span>
		<p>my</p>
		<span>&nbsp;</span>
		<p>primary</p>
		<span>&nbsp;</span>
		<p>focus</p>
		<span>&nbsp;</span>
		<p>still</p>
		<span>&nbsp;</span>
		<p>is</p>
		<span>&nbsp;</span>
		<p>web</p>
		<span>&nbsp;</span>
		<p>developemnt,</p>
		<span>&nbsp;</span>
		<p>I</p>
		<span>&nbsp;</span>
		<p>have</p>
		<span>&nbsp;</span>
		<p>dipped</p>
		<span>&nbsp;</span>
		<p>my</p>
		<span>&nbsp;</span>
		<p>toes</p>
		<span>&nbsp;</span>
		<p>into</p>
		<span>&nbsp;</span>
		<p>Rust</p>
		<span>&nbsp;</span>
		<p>and</p>
		<span>&nbsp;</span>
		<p>many</p>
		<span>&nbsp;</span>
		<p>more</p>
		<span>&nbsp;</span>
		<p>technologies.</p>
		<span>&nbsp;</span>
		<p>I</p>
		<span>&nbsp;</span>
		<p>always</p>
		<span>&nbsp;</span>
		<p>look</p>
		<span>&nbsp;</span>
		<p>forward</p>
		<span>&nbsp;</span>
		<p>towards</p>
		<span>&nbsp;</span>
		<p>discovering</p>
		<span>&nbsp;</span>
		<p>new</p>
		<span>&nbsp;</span>
		<p>opportunities</p>
		<span>&nbsp;</span>
		<p>and</p>
		<span>&nbsp;</span>
		<p>expanding</p>
		<span>&nbsp;</span>
		<p>my</p>
		<span>&nbsp;</span>
		<p>knowledge.</p>
		<span>&nbsp;</span>
	</div>
	<h1
		id="logo-heading"
		class="md:text-md xs:text-2xl mt-auto text-sm font-extralight font-stretch-ultra-expanded lg:text-3xl xl:text-3xl 2xl:text-4xl"
	>
		Have used:
	</h1>
	<ul
		id="tech-logo-list"
		class="z-[1] mb-auto flex h-fit w-full flex-wrap justify-center gap-5 border border-red-500 md:gap-10"
	>
		<li>
			<img
				id="tech-logo"
				src="/js.svg"
				alt="js logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/ts.svg"
				alt="ts logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/rust.svg"
				alt="rust logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/python.svg"
				alt="python logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/react.svg"
				alt="react logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/svelte.svg"
				alt="svelte logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/django.svg"
				alt="django logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/drf.svg"
				alt="drf logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/react-router.svg"
				alt="react router logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/tailwindcss.svg"
				alt="tailwindcss logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/bootstrap.svg"
				alt="bootstrap logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/opencv.svg"
				alt="opencv logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/sqlite.svg"
				alt="sqlite logo"
				class="xs:w-18 w-14 rounded-lg sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				id="tech-logo"
				src="/pocketbase.svg"
				alt="pocketbase logo"
				class="xs:w-18 w-14 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
	</ul>
</section>
