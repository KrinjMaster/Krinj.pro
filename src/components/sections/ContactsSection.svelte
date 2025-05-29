<script lang="ts">
	import { animate, inView, stagger } from 'motion';
	import { onMount } from 'svelte';

	onMount(() => {
		inView(
			'#contacts',
			() => {
				animate(
					'#contacts-title',
					{ opacity: [0, 1] },
					{ ease: 'easeOut', duration: 1, delay: 0.25 }
				);
				animate(
					'#contacts-list li',
					{ opacity: [0, 1] },
					{ ease: 'easeOut', delay: stagger(0.025, { startDelay: 0.25 }) }
				);
			},
			{
				amount: 'some'
			}
		);
	});
</script>

<footer
	id="contacts"
	class="flex h-[21vh] w-screen items-center p-2.5 font-stretch-150% lg:h-[11vh]"
>
	<h2
		id="contacts-title"
		class="xs:text-3xl text-xl font-extrabold opacity-0 sm:text-5xl md:text-7xl"
	>
		Contacts
	</h2>
	<ul id="contacts-list" class="flex w-full justify-end gap-1.5">
		<li
			class="flex w-fit items-center rounded-3xl border-3 border-[#121111] fill-white px-2.5 py-1.5 transition-all duration-500 hover:border-white"
		>
			<a href="mailto:maximmenchikov@gmail.com">
				<img loading="lazy" src="/email.svg" alt="email logo" class="h-[4vh] sm:h-[6vh]" />
			</a>
		</li>
		<li
			class="flex w-fit items-center rounded-3xl border-3 border-[#121111] fill-white px-2.5 py-1.5 transition-all duration-500 hover:border-white"
		>
			<a href="https://t.me/KrinjMaster">
				<img loading="lazy" src="/telegram.svg" alt="telegram logo" class="h-[4vh] sm:h-[6vh]" />
			</a>
		</li>
		<li
			class="flex w-fit items-center rounded-3xl border-3 border-[#121111] fill-white px-2.5 py-1.5 transition-all duration-500 hover:border-white"
		>
			<a href="https://github.com/KrinjMaster">
				<img loading="lazy" src="/github.svg" alt="github logo" class="h-[4vh] sm:h-[6vh]" />
			</a>
		</li>
	</ul>
</footer>
