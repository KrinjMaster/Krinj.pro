<script lang="ts">
  import { formatDistance } from 'date-fns'

  import Logo from '$lib/icons/Colored.svg';
  import KrinjForecast from '$lib/projects/KrinjForecast.jpg';
  import Marquee from '../components/Marquee.svelte'

  let dateSince = formatDistance(new Date(2022, 12, 1), new Date())

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
      <div class="w-48 h-48 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" class="w-full h-full rounded-xl"/>
      </div>
      <div class="w-48 h-48 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10">
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
      <h1>Git</h1>
      <h1>/</h1>
      <h1>Github</h1>
      <h1>/</h1>
      <h1>Vite</h1>
      <h1>/</h1>
      <h1>Esbuild</h1>
    </div>
  </div>
</section>
<section id="works" class="w-screen h-screen flex flex-col items-center p-10 snap-center shrink-0">
  <h1 class="text-white text-8xl font-extrabold">Portfolio</h1>
  <div class="flex h-full w-full justify-center items-center gap-16">
    <div class="w-96 h-96 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10 text-white text-center">
      <h1 class="text-2xl font-extrabold">Soon will be updated</h1>
      <p class="text-xl">Stay tuned</p>
    </div>
    <div class="w-96 h-96 bg-krinj_forecast hover:bg-krinj_forecast_hover bg-cover rounded-xl border-2 border-card_border group flex items-end transition-colors duration-150 ease-linear z-20">
      <div class="bg-card_info h-48 p-2 w-full rounded-b-xl bg-opacity-50 flex flex-col items-center gap-2 invisible group-hover:visible group-hover:animate-card_fade">
        <h1 class="text-white text-3xl font-extrabold">Krinj Forecast</h1>
        <div class="h-fit w-full flex gap-1 justify-center">
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">React</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">TS</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">Vite</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">Rest</span>
        </div>
        <p class="text-white font-bold text-center">This is my first small-size projects besides "Todo list". This projects is using real-time weather data to show the most accurate forecast.</p>
      </div>
    </div>
    <div class="w-96 h-96 bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border p-10 text-white text-center">
      <h1 class="text-2xl font-extrabold">Soon will be updated</h1>
      <p class="text-xl">Stay tuned</p>
    </div>
  </div>
</section>
