<script lang="ts">
  import type { Position } from "src/app"

  export let firstPositon: Position;
  export let secondPositon: Position;
</script>

{#if firstPositon.x && secondPositon.x && secondPositon.y}
  <span class="absolute w-4 h-4 rounded-full bg-white z-30" style="top: {secondPositon.y + 16}px; left: {secondPositon.x + 16}px;"></span>
  <span class="absolute border-2 border-white w-12 h-12 rounded-full" style="top: {firstPositon.y}px; left: {firstPositon.x}px;"></span>
{/if}