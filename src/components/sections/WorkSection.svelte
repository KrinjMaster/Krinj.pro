<script lang="ts">
	import { animate, scroll } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		const items = document.querySelectorAll('#work-card');

		scroll(
			animate('#work-group', {
				transform: ['none', `translateX(-${items.length - 1}00vw)`]
			}),
			{ target: document.querySelector('#work-container')! }
		);
	});

	// Progress bar representing gallery scroll
	// scroll(animate('.progress', { scaleX: [0, 1] }), {
	// 	target: document.querySelector('#work container')
	// });
</script>

<section id="work" class="flex h-8 w-8 font-stretch-150%">
	<div id="work-container" class="relative h-[300vh]">
		<div class="sticky top-[10vh] h-[80vh] overflow-hidden">
			<ul id="work-group" class="flex h-full gap-[5vw]">
				<li id="work-card" class="h-full w-[20vw] bg-transparent"></li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">CHIP-8 Emulator</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Built a simple game console emulator with Rust that can run old games from the 70s. Was
						one of my first projects built with Rust.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">Grady Krueger</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Telegram bot that helps teachers check their student's tests automatically. It uses
						Python and OpenCV for scanning and checking paper test.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">RPS Cli Game</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Rock, Paper, Scissors CLI game built in Rust that challangers user to try to beat word's
						best RPS AI (allegedly).
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/olimpik.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">Olimpik</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Website with olympiads for different subject such as math, CS and more. User can visit
						any olympiad and try to solve it.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">Vocab Booster</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Webste that helps you with expanding your English vocabulary. You can create collections
						of flashcards with helpful information to help you learn.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/pong.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">MineGuessr</h2>
					<p class="my-5 px-5 text-center text-2xl">
						A GeoGuessr type of game where user is placed in a random location and has to guess it,
						but game takes place in Minecraft.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/forecast.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">Krinj Forecast</h2>
					<p class="my-5 px-5 text-center text-2xl">
						Simple realtime weather forecast app that uses Open Meteo API to get the information of
						the weather.
					</p>
				</li>
				<li
					id="work-card"
					class="flex h-full w-[50vw] flex-auto flex-col items-center rounded-3xl bg-[#0b0b0b]"
				>
					<header
						class="shadow-card-image h-[50%] w-full rounded-t-3xl bg-[url('/calculator.jpg')] bg-cover"
					></header>
					<h2 class="relative bottom-8 text-5xl font-extrabold">IOS Calculator</h2>
					<p class="my-5 px-5 text-center text-2xl">
						IOS style calculator that can do basic math operations, nothing very fancy.
					</p>
				</li>
			</ul>
		</div>
	</div>
</section>
