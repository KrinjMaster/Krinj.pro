<script lang="ts">
  import Logo from '$lib/icons/Colored.svg';
  import Marquee from '../components/Marquee.svelte'
</script>

<section class="w-screen h-screen grid grid-cols-2 items-end p-10">
  <div class="flex border border-white h-full items-end">
    <h1 class="text-white text-8xl font-extrabold w-full">Sup, <br/> Im Max</h1>
  </div>
  <div class="flex border h-full border-white items-end justify-end">
    <img src={Logo} alt="Logo" class="w-96 h-96">
  </div>
  <Marquee />
</section>
