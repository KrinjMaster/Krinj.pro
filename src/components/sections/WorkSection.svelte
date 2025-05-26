<script lang="ts">
	import { animate, inView, scroll } from 'motion';
	import { onMount } from 'svelte';

	let scrollSize = $state(0);

	const resizeScrollSize = () => {
		const items = document.querySelectorAll('.img-container');

		if (window.innerWidth < 400) {
			scrollSize = items[0].clientWidth * 1.2;
		} else if (window.innerWidth < 650) {
			scrollSize = items[0].clientWidth * 1.38;
		} else {
			scrollSize = items[0].clientWidth * 1.13;
		}
	};

	onMount(() => {
		resizeScrollSize();

		const items = document.querySelectorAll('.img-container');
		const target = document.querySelector('.img-group-container');

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
					transform: ['none', `translateX(-${(items.length - 2) * scrollSize}px)`]
				}),
				{ target }
			);
		}
	});
</script>

<svelte:window on:resize={resizeScrollSize} />
<section class="img-group-container">
	<div class="top-[20vh] h-[60vh] lg:top-[10vh] lg:h-[79vh]">
		<ul class="img-group h-[60vh] lg:h-[79vh]">
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[40%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					CHIP-8 Emulator
				</h2>
				<div class="flex flex-wrap gap-2.5 text-sm md:gap-5 md:text-2xl">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-600 transition-all duration-300 hover:bg-orange-600"
					>
						Rust
					</span>
				</div>
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Built a simple game console emulator with Rust that can run old games from the 70s. Was
					one of my first projects built with Rust.
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					Grady Krueger
				</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
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
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Telegram bot that helps teachers check their student's tests automatically. It uses Python
					and OpenCV for scanning and checking paper test.
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					RPS Cli Game
				</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-600 transition-all duration-300 hover:bg-orange-600"
					>
						Rust
					</span>
				</div>
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Rock, Paper, Scissors CLI game built in Rust that challangers user to try to beat word's
					best RPS AI (allegedly).
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/olimpik.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">Olimpik</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
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
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300 transition-all duration-300 hover:bg-blue-300"
					>
						Pocketbase
					</span>
				</div>
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Website with olympiads for different subject such as math, CS and more. User can visit any
					olympiad and try to solve it.
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					Vocab Booster
				</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
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
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300 transition-all duration-300 hover:bg-blue-300"
					>
						Pocketbase
					</span>
				</div>
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Webste that helps you with expanding your English vocabulary. You can create collections
					of flashcards with helpful information to help you learn.
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					MineGuessr
				</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
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
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300 transition-all duration-300 hover:bg-blue-300"
					>
						Pocketbase
					</span>
					<span
						class="transitio-all flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 duration-300 hover:bg-white hover:text-black hover:ring-white"
					>
						Three.JS
					</span>
				</div>
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					A GeoGuessr type of game where user is placed in a random location and has to guess it,
					but game takes place in Minecraft.
				</p>
			</li>
			<li
				class="img-container my-auto flex h-[60vh] w-[85vw] flex-col items-center rounded-3xl bg-[#0b0b0b] opacity-0 lg:h-[79vh] lg:w-[50vw]"
			>
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/forecast.jpg')] bg-contain"
				></header>
				<h2 class="xs:text-4xl relative bottom-8 text-3xl font-extrabold md:text-6xl">
					Krinj Forecast
				</h2>
				<div class="flex flex-wrap justify-center gap-2.5 text-sm md:gap-5 md:text-2xl">
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
				<p class="xs:text-xl my-5 px-5 text-center text-lg md:text-3xl">
					Simple realtime weather forecast app that uses Open Meteo API to get the information of
					the weather.
				</p>
			</li>
		</ul>
	</div>
</section>
