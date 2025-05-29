<script lang="ts">
	import { animate, inView, scroll } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		const items = document.querySelectorAll('.img-container');
		const target = document.querySelector('.img-group-container');
		const progressBar = document.querySelector('#progress-bar');

		inView(items, (el) => {
			animate(
				el,
				{
					opacity: [0, 1]
				},
				{
					ease: 'easeInOut',
					duration: 0.4
				}
			);

			return () => {
				animate(
					el,
					{
						opacity: [1, 0]
					},
					{
						ease: 'easeInOut',
						duration: 0.1
					}
				);
			};
		});

		if (target) {
			scroll(
				animate('.img-group', {
					transform: ['none', `translateX(-${items.length - 1}00vw)`]
				}),
				{ target }
			);
		}

		if (progressBar) {
			scroll(
				animate(
					progressBar,
					{
						clipPath: ['inset(0 100% 0 0)', 'inset(0 0 0 0)']
					},
					{
						ease: 'linear'
					}
				)
			);
		}
	});
</script>

<section id="work" class="img-group-container font-stretch-150%">
	<!-- <h2 -->
	<!-- 	class="font-editundo sticky top-[90vh] text-center text-3xl text-[#71717a] md:text-6xl lg:text-6xl" -->
	<!-- > -->
	<!-- 	More on my <a -->
	<!-- 		id="gh-link" -->
	<!-- 		href="https:/github.com/KrinjMaster" -->
	<!-- 		class="font-extrabold text-white opacity-50 transition-all duration-400 hover:tracking-wider" -->
	<!-- 		>github</a -->
	<!-- 	> -->
	<!-- </h2> -->
	<div class="top-[20vh] z-[10] h-[60vh] bg-[#121111] lg:top-[10vh] lg:h-[79vh]">
		<ul class="img-group h-[60vh] lg:h-[79vh]">
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/pong.webp')] bg-cover"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						CHIP8 Emulator
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-600 transition-all duration-300 hover:bg-orange-600"
						>
							Rust
						</span>
					</div>
					<p class="xs:text-lg my-5 px-2.5 text-center text-[12px] md:text-3xl">
						Built a simple game console emulator with Rust that can run old games from the 70s. Was
						one of my first projects built with Rust.
					</p>
				</div>
			</li>
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/gradykrueger.webp')] bg-cover bg-[50%_50%] bg-no-repeat"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						Grady Krueger
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 px-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-600 transition-all duration-300 hover:bg-blue-600"
						>
							Python
						</span>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 transition-all duration-300 hover:bg-white hover:text-black hover:ring-white"
						>
							OpenCV
						</span>
					</div>
					<p class="xs:text-lg my-5 px-5 text-center text-[12px] md:text-3xl">
						Telegram bot that helps teachers check their student's tests automatically.
					</p>
				</div>
			</li>
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/rps-cli.webp')] bg-cover bg-[50%_50%] bg-no-repeat"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						RPS Cli Game
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-600 transition-all duration-300 hover:bg-orange-600"
						>
							Rust
						</span>
					</div>
					<p class="xs:text-lg my-5 px-5 text-center text-[12px] md:text-3xl">
						Rock, Paper, Scissors CLI game built in Rust that challangers user to try to beat word's
						best RPS AI (allegedly).
					</p>
				</div>
			</li>
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/olimpik.webp')] bg-cover bg-[50%_50%] bg-no-repeat"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						Olimpik
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 px-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700 transition-all duration-300 hover:bg-blue-700"
						>
							TypeScript
						</span>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-500 transition-all duration-300 hover:bg-orange-500"
						>
							Svelte
						</span>
					</div>
					<p class="xs:text-lg my-5 px-5 text-center text-[12px] md:text-3xl">
						Website with olympiads for different subject such as math, CS and more.
					</p>
				</div>
			</li>
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/vocabbooster.webp')] bg-cover bg-[50%_50%] bg-no-repeat"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						Vocab Booster
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 px-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700 transition-all duration-300 hover:bg-blue-700"
						>
							TypeScript
						</span>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-500 transition-all duration-300 hover:bg-orange-500"
						>
							Svelte
						</span>
					</div>
					<p class="xs:text-lg my-5 px-5 text-center text-[12px] md:text-3xl">
						Webste that helps you with expanding your English vocabulary.
					</p>
				</div>
			</li>
			<li class="flex w-screen flex-[0_0_auto] justify-center">
				<div
					class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
				>
					<header
						class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/forecast.webp')] bg-cover bg-[50%_50%] bg-no-repeat"
					></header>
					<h2
						class="xs:text-3xl relative bottom-4 text-center text-xl font-extrabold md:bottom-8 md:text-6xl"
					>
						Krinj Forecast
					</h2>
					<div
						class="xs:text-md flex flex-wrap justify-center gap-2.5 px-2.5 text-[10px] sm:text-xl md:gap-5 md:text-2xl"
					>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700 transition-all duration-300 hover:bg-blue-700"
						>
							TypeScript
						</span>
						<span
							class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-400 transition-all duration-300 hover:bg-blue-400"
						>
							React
						</span>
					</div>
					<p class="xs:text-lg my-5 px-5 text-center text-[12px] md:text-3xl">
						Simple realtime weather forecast app that uses Open Meteo API to get the information of
						the weather.
					</p>
				</div>
			</li>
		</ul>
	</div>
	<div
		id="progress-bar"
		class="sticky inset-x-0 top-[95svh] z-[0] mx-auto h-4 w-[95vw] rounded-md bg-[#525AFF] text-center"
	></div>
</section>
