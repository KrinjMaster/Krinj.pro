<script lang="ts">
	import { animate, hover, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		const aboutText: HTMLParagraphElement | null = document.querySelector('#about-text');
		const techLogos = document.querySelectorAll('#tech-logo');
		const logoHeading = document.querySelector('#logo-heading');
		const aboutTextParagraph = document.querySelectorAll('#about-text p');

		if (aboutText && techLogos && logoHeading && aboutTextParagraph) {
			console.log(aboutText.style.display);

			inView(
				aboutText,
				() => {
					animate(
						aboutTextParagraph,
						{ opacity: [0, 0, 1] },
						{ ease: 'easeOut', delay: stagger(0.03), duration: 1 }
					);
				},
				{
					amount: 0.5
				}
			);

			inView(
				'#tech-logo-list',
				() => {
					animate(
						logoHeading,
						{ x: ['-10%', 0], opacity: [0, 1] },
						{ type: 'spring', duration: 1.5 }
					);
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
				},
				{
					amount: 0.5
				}
			);

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
		}
	});
</script>

<section
	id="about"
	class="flex h-screen w-full flex-col overflow-hidden px-2.5 py-3.5 font-stretch-150%"
>
	<div
		id="about-text"
		class="xs:text-xl flex flex-wrap justify-self-auto text-sm font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
	>
		<p class="opacity-0">Started</p>
		<span>&nbsp;</span>
		<p class="opacity-0">career</p>
		<span>&nbsp;</span>
		<p class="opacity-0">in</p>
		<span>&nbsp;</span>
		<p class="opacity-0">2022,</p>
		<span>&nbsp;</span>
		<p class="opacity-0">since</p>
		<span>&nbsp;</span>
		<p class="opacity-0">then</p>
		<span>&nbsp;</span>
		<p class="opacity-0">tried</p>
		<span>&nbsp;</span>
		<p class="opacity-0">and</p>
		<span>&nbsp;</span>
		<p class="opacity-0">fell</p>
		<span>&nbsp;</span>
		<p class="opacity-0">in</p>
		<span>&nbsp;</span>
		<p class="opacity-0">love</p>
		<span>&nbsp;</span>
		<p class="opacity-0">with</p>
		<span>&nbsp;</span>
		<p class="opacity-0">frontend.</p>
		<span>&nbsp;</span>
		<p class="opacity-0">Although</p>
		<span>&nbsp;</span>
		<p class="opacity-0">my</p>
		<span>&nbsp;</span>
		<p class="opacity-0">primary</p>
		<span>&nbsp;</span>
		<p class="opacity-0">focus</p>
		<span>&nbsp;</span>
		<p class="opacity-0">still</p>
		<span>&nbsp;</span>
		<p class="opacity-0">is</p>
		<span>&nbsp;</span>
		<p class="opacity-0">web</p>
		<span>&nbsp;</span>
		<p class="opacity-0">developemnt,</p>
		<span>&nbsp;</span>
		<p class="opacity-0">I</p>
		<span>&nbsp;</span>
		<p class="opacity-0">have</p>
		<span>&nbsp;</span>
		<p class="opacity-0">dipped</p>
		<span>&nbsp;</span>
		<p class="opacity-0">my</p>
		<span>&nbsp;</span>
		<p class="opacity-0">toes</p>
		<span>&nbsp;</span>
		<p class="opacity-0">into</p>
		<span>&nbsp;</span>
		<p class="opacity-0">Rust</p>
		<span>&nbsp;</span>
		<p class="opacity-0">and</p>
		<span>&nbsp;</span>
		<p class="opacity-0">many</p>
		<span>&nbsp;</span>
		<p class="opacity-0">more</p>
		<span>&nbsp;</span>
		<p class="opacity-0">technologies.</p>
		<span>&nbsp;</span>
		<p class="opacity-0">I</p>
		<span>&nbsp;</span>
		<p class="opacity-0">always</p>
		<span>&nbsp;</span>
		<p class="opacity-0">look</p>
		<span>&nbsp;</span>
		<p class="opacity-0">forward</p>
		<span>&nbsp;</span>
		<p class="opacity-0">towards</p>
		<span>&nbsp;</span>
		<p class="opacity-0">discovering</p>
		<span>&nbsp;</span>
		<p class="opacity-0">new</p>
		<span>&nbsp;</span>
		<p class="opacity-0">opportunities</p>
		<span>&nbsp;</span>
		<p class="opacity-0">and</p>
		<span>&nbsp;</span>
		<p class="opacity-0">expanding</p>
		<span>&nbsp;</span>
		<p class="opacity-0">my</p>
		<span>&nbsp;</span>
		<p class="opacity-0">knowledge.</p>
		<span>&nbsp;</span>
	</div>
	<h1
		id="logo-heading"
		class="md:text-md xs:text-2xl mt-auto text-sm font-extralight font-stretch-ultra-expanded opacity-0 lg:text-3xl xl:text-3xl 2xl:text-4xl"
	>
		Have used:
	</h1>
	<ul
		id="tech-logo-list"
		class="z-[1] mb-auto flex h-fit w-full flex-wrap justify-center gap-5 md:gap-10 xl:mt-2.5"
	>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/js.svg"
				alt="js logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/ts.svg"
				alt="ts logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/rust.svg"
				alt="rust logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/python.svg"
				alt="python logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/react.svg"
				alt="react logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/svelte.svg"
				alt="svelte logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/django.svg"
				alt="django logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/drf.svg"
				alt="drf logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/react-router.svg"
				alt="react router logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/tailwindcss.svg"
				alt="tailwindcss logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/bootstrap.svg"
				alt="bootstrap logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/opencv.svg"
				alt="opencv logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/sqlite.svg"
				alt="sqlite logo"
				class="xs:w-18 w-14 rounded-lg opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
		<li>
			<img
				loading="lazy"
				id="tech-logo"
				src="/pocketbase.svg"
				alt="pocketbase logo"
				class="xs:w-18 w-14 opacity-0 sm:w-24 md:w-28 lg:w-32 xl:w-28 2xl:w-32"
			/>
		</li>
	</ul>
</section>
