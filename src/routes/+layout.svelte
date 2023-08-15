<script>
  import Loader from '../components/Loader.svelte'
  import { onMount } from "svelte"
  import "../styles/app.css";

  let isRendered = true;

  // onMount(( ) => {
  //   setTimeout(() => isRendered = true, 2000)
  // })
</script>

{#if !isRendered} 
  <Loader />
{:else}
 <slot></slot>
{/if}
