<script lang="ts">
	import { animate, inView, scroll, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		const sectionNum = document.querySelector('.section-num-1');
		const aboutText = document.querySelector('.about-text');

		inView('.about-text', () => {
			const element = document.querySelectorAll('.about-text p');

			if (element && aboutText) {
				animate(
					element,
					{ opacity: [0, 0, 1] },
					{ ease: 'easeOut', delay: stagger(0.03, { startDelay: 0.5 }), duration: 1 }
				);
				scroll(animate(aboutText, { y: [-50, 50] }, { ease: 'linear' }), { target: aboutText });
			}
		});

		if (sectionNum && aboutText) {
			scroll(animate(sectionNum, { y: ['100%', 0] }, { ease: 'linear' }), {
				target: sectionNum
			});
		}
	});
</script>

<section id="about" class="z-[0] flex h-screen w-full flex-col justify-center font-stretch-150%">
	<div class="about-text desktop:text-7xl flex flex-wrap p-2.5 text-xl font-extrabold">
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
		class="section-num-1 font-editundo desktop:text-[20rem] desktop:leading-[16rem] absolute top-[100%] left-4 text-[10rem] leading-[7rem] font-bold opacity-15"
	>
		01
	</h1>
</section>
