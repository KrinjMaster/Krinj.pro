<script lang="ts">
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';

	let scrollSize = $state(0);

	const resizeScrollSize = () => {
		const items = document.querySelectorAll('.img-container');
		scrollSize = items[0].clientWidth + 75;
	};

	onMount(() => {
		resizeScrollSize();

		const items = document.querySelectorAll('.img-container');
		const target = document.querySelector('.img-group-container');

		console.log(items[0].clientWidth);
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
	<div>
		<ul class="img-group">
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[40vh] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">CHIP-8 Emulator</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-600"
					>
						Rust
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Built a simple game console emulator with Rust that can run old games from the 70s. Was
					one of my first projects built with Rust.
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">Grady Krueger</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-600"
					>
						Python
					</span>
					<span class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2">
						OpenCV
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Telegram bot that helps teachers check their student's tests automatically. It uses Python
					and OpenCV for scanning and checking paper test.
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">RPS Cli Game</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-700"
					>
						Rust
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Rock, Paper, Scissors CLI game built in Rust that challangers user to try to beat word's
					best RPS AI (allegedly).
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/olimpik.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">Olimpik</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700"
					>
						TypeScript
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-500"
					>
						Svelte
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300"
					>
						Pocketbase
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Website with olympiads for different subject such as math, CS and more. User can visit any
					olympiad and try to solve it.
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">Vocab Booster</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700"
					>
						TypeScript
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-500"
					>
						Svelte
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300"
					>
						Pocketbase
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Webste that helps you with expanding your English vocabulary. You can create collections
					of flashcards with helpful information to help you learn.
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">MineGuessr</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700"
					>
						TypeScript
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-orange-500"
					>
						Svelte
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-300"
					>
						Pocketbase
					</span>
					<span class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2">
						Three.JS
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					A GeoGuessr type of game where user is placed in a random location and has to guess it,
					but game takes place in Minecraft.
				</p>
			</li>
			<li class="img-container flex flex-col items-center rounded-3xl bg-[#0b0b0b]">
				<header
					class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/forecast.jpg')] bg-cover"
				></header>
				<h2 class="relative bottom-8 text-5xl font-extrabold">Krinj Forecast</h2>
				<div class="flex flex-wrap gap-5">
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-700"
					>
						TypeScript
					</span>
					<span
						class="flex h-fit w-fit items-center rounded-xl px-5 py-1 text-center ring-2 ring-blue-400"
					>
						React
					</span>
				</div>
				<p class="my-5 px-5 text-center text-2xl">
					Simple realtime weather forecast app that uses Open Meteo API to get the information of
					the weather.
				</p>
			</li>
		</ul>
	</div>
</section>
