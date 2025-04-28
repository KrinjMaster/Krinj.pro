<script>
	import { onMount } from 'svelte';

	let isSeen = $state(true);

	onMount(() => {
		setTimeout(() => {
			isSeen = false;
		}, 2500);
	});
	// class="motion-duration-1500 motion-delay-1500 motion-ease-in-out flex h-full w-full border"
</script>

{#if isSeen}
	<div class="h-full w-full overflow-hidden">
		<div
			class="motion-duration-1500 motion-translate-y-out-100 motion-delay-1000 motion-ease-in-out flex h-full w-full"
		>
			<div class="m-auto flex flex-col gap-32">
				<img
					alt="logo"
					src="/logo.svg"
					class="motion-translate-x-in-[250%] motion-opacity-in-0 motion-scale-in-75 motion-duration-700 motion-ease-in-out m-auto w-64"
				/>
				<div class="m-auto flex gap-1 text-8xl font-extrabold">
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-100"
					>
						W
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-50"
					>
						a
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-150"
					>
						s
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-100"
					>
						s
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-75"
					>
						u
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-100"
					>
						p
					</h1>
					<h1>&nbsp;</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-100"
					>
						s
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-75"
					>
						t
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-200"
					>
						r
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-150"
					>
						a
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-100"
					>
						n
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-75"
					>
						g
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-200"
					>
						e
					</h1>
					<h1
						class="motion-preset-slide-up-lg motion-duration-600 motion-ease-in-out motion-delay-150"
					>
						r
					</h1>
				</div>
			</div>
		</div>
	</div>
{/if}
