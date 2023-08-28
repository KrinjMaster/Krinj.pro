<script lang="ts">
  // @ts-nocheck
  import { formatDistance } from 'date-fns'

  import Logo from '../lib/icons/Colored.svg';
  import Marquee from '../components/Marquee.svelte'

  let dateSince = formatDistance(new Date(2022, 12, 1), new Date())

</script>

<section id="home" class="w-screen h-screen grid md:grid-cols-2 grid-cols-1 items-end snap-center shrink-0">
  <div class="flex h-full items-end p-10">
    <h1 class="text-white md:text-8xl text-6xl font-extrabold w-full">Sup, <br/> Im Max</h1>
  </div>
  <div class="flex h-full items-end md:justify-end justify-center md:order-none order-first p-10">
    <img src={Logo} alt="Logo" class="md:w-96 md:h-96 w-40 h-40">
  </div>
  <Marquee />
</section>
<section id="about" class="w-screen h-screen md:p-10 p-5 flex justify-start text-white snap-center shrink-0 flex-col">
  <div class="w-full h-fit flex md:flex-row flex-col justify-between items-center p-4">
    <div class="md:w-fit w-full flex flex-col md:gap-5 p-1">
      <h1 class="md:text-8xl text-2xl font-extrabold md:text-start text-center">Max Menshikov</h1>
      <p class="md:text-3xl text-sm bold break-keep">I'm 14 yo. Currently working my way up as a <mark class="bg-violet text-white md:p-1.5 p-0.5 rounded-lg font-extrabold">Frontend developer.</mark>Started my journey in December, 2022.</p>
    </div>
    <h1 class="text-2xl md:text-8xl font-extrabold text-center">{dateSince}<br/><p class="text-xl md:text-sm font-thin tracking-widest">ago</p></h1>
  </div>
  <div class="flex flex-col w-full h-full items-center gap-5">
    <h1 class="md:text-9xl p-2.5 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet to-light_violet h-fit">Working w/</h1>
    <div class="md:flex grid grid-cols-3 gap-5 md:justify-center items-center md:w-full w-fit h-fit">
      <!-- cards -->
      <div class="md:w-48 md:h-48 w-16 h-16  bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border md:p-10 p-1.5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" class="w-full h-full md:rounded-xl rounded-md"/>
      </div>
      <div class="md:w-48 md:h-48 w-16 h-16  bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border md:p-10 p-1.5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" class="w-full h-full md:rounded-xl rounded-md"/>
      </div>
      <div class="md:w-48 md:h-48 w-16 h-16  bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border md:p-10 p-1.5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-full h-full md:rounded-xl rounded-md"/>
      </div>
      <div class="md:w-48 md:h-48 w-16 h-16  bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border md:p-10 p-1.5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" class="w-full h-full md:rounded-xl rounded-md"/>
      </div>
      <div class="md:w-48 md:h-48 w-16 h-16  bg-white bg-opacity-5 backdrop-blur-md rounded-xl border-2 border-card_border md:p-10 p-1.5">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Svelte" class="w-full h-full md:rounded-xl rounded-md bg-white p-2"/>
      </div>
    </div>
    <h1 class="font-extrabold md:text-4xl text-md">Also</h1>
    <div class="w-full h-fit md:flex grid grid-cols-3 text-center gap-1.5 md:text-xl text-sm text-gray font-bold justify-center">
      <h1>HTML</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>CSS</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>TailwindCSS</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>Bootstrap</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>Git</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>Github</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>Vite</h1>
      <h1 class="md:block hidden">/</h1>
      <h1>Esbuild</h1>
    </div>
  </div>
</section>
<section id="works" class="w-screen h-screen flex flex-col items-center p-10 snap-center shrink-0">
  <h1 class="text-white md:text-8xl text-4xl font-extrabold">Portfolio</h1>
  <div class="flex md:flex-row flex-col h-full w-full justify-center items-center md:gap-16 gap-2.5">
    <div class="md:w-96 md:h-96 w-64 h-64 md:bg-krinj_forecast hover:bg-krinj_forecast_hover bg-krinj_forecast_hover bg-cover rounded-xl border-2 border-card_border group flex items-end transition-colors duration-150 ease-linear z-20 ">
      <div class="bg-card_info md:h-48 h-fit p-2 w-full rounded-b-xl bg-opacity-50 flex flex-col items-center gap-2 md:invisible visible group-hover:visible group-hover:animate-card_fade">
        <h1 class="text-white md:text-3xl text-3xl font-extrabold md:invisible group-hover:visible group-hover:animate-card_fade3">Krinj Forecast</h1>
        <div class="h-fit w-full flex gap-1 justify-center md:invisible group-hover:visible group-hover:animate-card_fade2">
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">React</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">TS</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">Vite</span>
          <span class="w-fit h-8 border-2 border-violet rounded-xl text-white text-sm px-2.5 py-1 text-center">Rest</span>
        </div>
        <p class="text-white md:block hidden font-bold text-center md:invisible group-hover:visible group-hover:animate-card_fade">This is my first small-size projects besides "Todo list". This projects is using real-time weather data to show the most accurate forecast.</p>
      </div>
    </div>
  </div>
</section>
