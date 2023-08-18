<script lang="ts">
  import Loader from '../components/Loader.svelte'
  import { onMount } from "svelte"
  import "../styles/app.css";
  import MouseBlob from '../components/MouseBlob.svelte'
  import NavBar from '../components/NavBar.svelte'

  let isRendered = false;

  let firstPositon = {
    x: null,
    y: null
  }

  let secondPositon = {
    x: null,
    y: null
  }

  onMount(( ) => {
    setTimeout(() => isRendered = true, 2000)
  })

  const handleMouseMovements = (event: MouseEvent) => {
    setTimeout(() => {
      firstPositon.x = event.pageX;
      firstPositon.y = event.pageY;
    }, 135)
    setTimeout(() => {
      secondPositon.x = event.pageX;
      secondPositon.y = event.pageY;
    }, 100)
  }
</script>

{#if !isRendered} 
  <Loader />
{:else}
  <main on:mousemove={handleMouseMovements} role="none" class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    <MouseBlob firstPositon={firstPositon} secondPositon={secondPositon}/>
    <NavBar/>
    <slot>
    </slot>
  </main>
{/if}
