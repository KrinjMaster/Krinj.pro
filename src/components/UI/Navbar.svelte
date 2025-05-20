<script lang="ts">
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'#navbar',
			{
				y: ['-100%', 0]
			},
			{
				type: 'spring',
				delay: 3,
				duration: 1
			}
		);
	});
</script>

<nav id="navbar" class="fixed top-0 z-[100] flex h-12 w-screen items-center px-5 py-2.5">
	<ul
		class="flex h-10 items-center justify-center gap-5 rounded-2xl bg-white/5 px-5 text-2xl font-extrabold font-stretch-200% backdrop-blur-lg"
	>
		<li>
			<a href="#main"
				><img
					id="logo"
					src="/LOGO.svg"
					alt="logo"
					class="h-7 transition-all duration-200 ease-in-out hover:scale-90"
				/></a
			>
		</li>
		<li class="group w-32 text-center">
			<a href="#about" class="transition-all duration-400 ease-in-out group-hover:font-stretch-125%"
				>ABOUT</a
			>
		</li>
		<li class="group w-32 text-center">
			<a href="#work" class="transition-all duration-400 ease-in-out group-hover:font-stretch-125%"
				>WORK</a
			>
		</li>
		<li class="group w-48 text-center">
			<a
				href="#contact"
				class="transition-all duration-400 ease-in-out group-hover:font-stretch-125%">CONTACT</a
			>
		</li>
	</ul>
</nav>
