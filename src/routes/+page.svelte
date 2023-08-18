<script lang="ts">
  import Logo from '$lib/icons/Colored.svg';
  import Marquee from '../components/Marquee.svelte'
  import { formatDistance } from 'date-fns'

  let dateSince = formatDistance(new Date(2022, 11, 10), new Date())
</script>

<section id="home" class="w-screen h-screen grid grid-cols-2 items-end p-10 snap-center shrink-0">
  <div class="flex h-full items-end">
    <h1 class="text-white text-8xl font-extrabold w-full">Sup, <br/> Im Max</h1>
  </div>
  <div class="flex h-full items-end justify-end">
    <img src={Logo} alt="Logo" class="w-96 h-96">
  </div>
  <Marquee />
</section>
<section id="about" class="w-screen h-screen p-10 flex justify-start text-white snap-center shrink-0 flex-col">
  <div class="w-full h-fit flex justify-between items-center p-4">
    <div class="w-fit flex flex-col gap-5">
      <h1 class="text-8xl font-extrabold">Max Menshikov</h1>
      <p class="text-3xl bold">I'm 14 yo. Currently working my way up as a <mark class="bg-violet text-white p-1.5 rounded-lg font-extrabold">Frontend developer.</mark><br/>Started my journey in December, 2022.</p>
    </div>
    <h1 class="text-8xl font-extrabold text-center">{dateSince}<br/><p class="text-xl font-thin tracking-widest">ago</p></h1>
  </div>
  <div class="flex flex-col w-full h-full items-center gap-5">
    <h1 class="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet to-light_violet h-52">Working w/</h1>
    <div class="flex gap-5 justify-center w-full h-fit">
      <!-- cards -->
      <div class="w-48 h-48 bg-card_bg rounded-xl border-2 border-card_border p-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-card_bg rounded-xl border-2 border-card_border p-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-card_bg rounded-xl border-2 border-card_border p-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-card_bg rounded-xl border-2 border-card_border p-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-card_bg rounded-xl border-2 border-card_border p-6">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Svelte" class="w-full h-full rounded-xl bg-white p-2"/>
      </div>
    </div>
    <h1 class="font-extrabold text-4xl">Also</h1>
    <div class="w-full h-fit flex gap-1.5 text-xl text-gray font-bold justify-center">
      <h1>HTML</h1>
      <h1>/</h1>
      <h1>CSS</h1>
      <h1>/</h1>
      <h1>TailwindCSS</h1>
      <h1>/</h1>
      <h1>Bootstrap</h1>
      <h1>/</h1>
      <h1>Materal UI</h1>
      <h1>/</h1>
      <h1>Git</h1>
      <h1>/</h1>
      <h1>Github</h1>
      <h1>/</h1>
      <h1>Vite</h1>
      <h1>/</h1>
      <h1>Eslint</h1>
    </div>
  </div>
</section>
