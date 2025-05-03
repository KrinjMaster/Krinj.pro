<script lang="ts">
	let age = new Date().getFullYear() - 2008;
</script>

<section id="main" class="flex h-screen w-full shrink-0 snap-center overflow-x-clip p-5">
	<div class="desktop:flex-row my-auto flex h-fit w-full flex-col-reverse">
		<div class="desktop:mx-0 mx-auto my-auto flex flex-col">
			<h1
				class="motion-preset-slide-right motion-opacity-in-0 motion-delay-1600 desktop:text-[12rem] text-9xl font-extrabold"
			>
				Hi, I'm Max
			</h1>
			<div class="desktop:mx-0 mx-auto flex h-[5rem] items-end gap-1.5">
				<p class="motion-opacity-in-0 motion-delay-1800 pb-2.25">
					A {age} year old software engineer with a passion for creating something
				</p>
				<div class="group flex h-full w-20 flex-col items-center justify-end">
					<span
						class="motion-preset-slide-up-lg motion-delay-1900 motion-duration-500 w-fit font-extrabold text-violet-300"
						>beautiful</span
					>
					<div
						class="motion-opacity-in-0 motion-delay-2200 group flex h-2 w-20 items-center justify-center overflow-clip transition-all duration-500 ease-in-out"
					>
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
						<img alt="wavy line" src="/wavy-dash.svg" class="animate-marquee w-6" />
					</div>
				</div>
				<img
					alt="arrow"
					src="/curved-arrow.svg"
					class="motion-rotate-in-90 motion-opacity-in-0 motion-delay-1500 w-24 rotate-[180deg]"
				/>
			</div>
		</div>
		<img
			alt="my picture"
			src="/profile.jpg"
			class="desktop:w-96 desktop:h-96 motion-preset-slide-left-lg motion-delay-2000 motion-duration-500 dekstop:ml-auto desktop:mr-0 mx-auto h-80 w-80 rounded-full"
		/>
	</div>
</section>
