<script lang="ts">
  import Loader from '../components/Loader.svelte'
  import { onMount } from "svelte"
  import "../styles/app.css";
  import MouseBlob from '../components/MouseBlob.svelte'
  import NavBar from '../components/NavBar.svelte'

  let isRendered = true;

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
      firstPositon.x = event.clientX;
      firstPositon.y = event.clientY;
    }, 135)
    setTimeout(() => {
      secondPositon.x = event.clientX;
      secondPositon.y = event.clientY;
    }, 100)
  }
</script>

{#if !isRendered} 
  <Loader />
{:else}
  <section on:mousemove={handleMouseMovements} role="none">
    <MouseBlob firstPositon={firstPositon} secondPositon={secondPositon}/>
    <NavBar/>
    <slot>
    </slot>
  </section>
{/if}
