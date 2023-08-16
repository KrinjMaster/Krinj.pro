<script lang="ts">
  export let firstPositon;
  export let secondPositon;
</script>

{#if firstPositon.x && secondPositon.x}
  <span class={`absolute w-4 h-4 rounded-full bg-white`} style="top: {secondPositon.y + 16}px; left: {secondPositon.x + 16}px;"></span>
  <span class={`absolute border-2 border-white w-12 h-12 rounded-full`} style="top: {firstPositon.y}px; left: {firstPositon.x}px;"></span>
{/if}