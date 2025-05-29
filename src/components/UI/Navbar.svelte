<script lang="ts">
	import { animate } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		animate(
			'#navbar',
			{
				y: ['-100%', 0],
				opacity: [0, 1]
			},
			{
				type: 'spring',
				delay: 4,
				duration: 1
			}
		);
	});
</script>

<nav
	id="navbar"
	class="fixed top-0 z-[100] flex h-fit w-screen items-center justify-center bg-[radial-gradient(rgba(0,_0,_0,_0)_1px,#121111_1px)] bg-size-[4px_4px] py-2.5 opacity-0 backdrop-blur-[1px] md:justify-start md:bg-size-[5px_5px] md:px-5 md:backdrop-blur-[6px]"
>
	<ul
		class="flex h-fit items-center justify-center gap-2 font-extrabold font-stretch-200% sm:gap-5 sm:text-2xl"
	>
		<li class="mr-0.5">
			<a href="#main"
				><img
					id="logo"
					src="/LOGO.svg"
					alt="logo"
					class="h-7 transition-all duration-200 ease-in-out hover:scale-90 sm:h-7"
				/></a
			>
		</li>
		<li class="text-sm sm:text-xl lg:text-2xl">
			<a href="#about">ABOUT</a>
		</li>
		<li class="text-sm sm:text-xl lg:text-2xl">
			<a href="#work">WORK</a>
		</li>
		<li class="text-sm sm:text-xl lg:text-2xl">
			<a href="#contacts">CONTACTS</a>
		</li>
	</ul>
</nav>
