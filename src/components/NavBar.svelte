<script lang="ts">
  // @ts-nocheck
  import Logo from '../lib/icons/LogoSVG.svg';
  import Github from '../lib/icons/Github.svg';
  import Telegram from '../lib/icons/Telegram.svg';
  import Mail from '../lib/icons/Mail.svg';
  import anime from 'animejs';
  import { onMount } from 'svelte'

  let open = false;
  let isDisabled = false;

  onMount(() => {
    const navbar = document.querySelectorAll('#sidebar')
    const animateX = window.innerWidth - ( window.innerWidth / 3)
    
    anime({
      targets: navbar,
      translateX: animateX*1.5,
      duration: 0,
    })
  })

  const handleDisableButton = () => {
    isDisabled = true;
    setTimeout(() => isDisabled = false, 500)
  }
  
  const changeButtonVisibility = (prevState: boolean) => {
    if (isDisabled) {
      return false;
    } else {
      const navbar = document.querySelectorAll('#sidebar')
      const animateX = window.innerWidth - ( window.innerWidth / 3)
      open = !prevState
      
      if (!prevState) {
        anime({
          targets: navbar,
          translateX: animateX,
          easing: 'easeInOutQuad',
          duration: 500,
        })
        handleDisableButton()
      } else {
        anime({
          targets: navbar,
          translateX: animateX*1.5,
          easing: 'easeInOutQuad',
          duration: 500,
        })
        handleDisableButton()
      }
    }
  }
</script>

<div class="w-full h-20 bg-transparent top-0 pl-4 flex justify-between items-center fixed z-20">
  <img src={Logo} alt="Logo" class="w-12 h-12">
  <div class={`static h-full w-20 flex flex-col gap-2.5 items-end justify-center p-3`} on:click={() => changeButtonVisibility(open)} role="none">
    <span class={`h-1 w-12 rounded-xl transition-transform duration-350 ease-in-out bg-white ${open ? 'rotate-45 absolute': ''}`}></span>
    <span class={`h-1 w-8 rounded-xl transition-transform duration-350 ease-in-out bg-white ${open ? 'hidden': ''}`}></span>
    <span class={`h-1 rounded-xl transition-transform duration-350 ease-in-out bg-white ${open ? '-rotate-45 absolute w-12': 'w-4'}`}></span>
  </div>
</div>
<div id="sidebar" class={`fixed h-full w-1/3 flex flex-col justify-between bg-sidebar text-white font-extrabold text-7xl p-8 z-10 transition-opacity ease-linear whitespace-nowrap`}>
  <div class="flex flex-col gap-2.5 items-center">
    <a href="#home" on:click={() => changeButtonVisibility(open)}><p class="hover:scale-x-125 transition-all duration-150 ease-linear">Home</p></a>
    <a href="#about" on:click={() => changeButtonVisibility(open)}><p class="hover:scale-x-125 transition-all duration-150 ease-linear">About me</p></a>
    <a href="#works" on:click={() => changeButtonVisibility(open)}><p class="hover:scale-x-125 transition-all duration-150 ease-linear">Works</p></a>
  </div>
  <div class="flex gap-5">
    <a tabindex="-1" target="_blank" href="https://github.com/KrinjMaster" class="hover:scale-125 transition-transform duration-150 ease-linear p-2.5">
      <img src={Github} alt="Github logo" class="w-12 h-12"/>
    </a>
    <a tabindex="-1" target="_blank" href="https://github.com/KrinjMaster" class="hover:scale-125 transition-transform duration-150 ease-linear p-2.5">
      <img src={Telegram} alt="Telegram logo" class="w-12 h-12"/>
    </a>
    <a tabindex="-1" target="_blank" href="mailto:developer@krinj.pro" class="hover:scale-125 transition-transform duration-150 ease-linear p-2.5">
      <img src={Mail} alt="Telegram logo" class="w-12 h-12"/>
    </a>
  </div>
</div>