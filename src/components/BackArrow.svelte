<script>
  import { fly } from "svelte/transition";
  import { circInOut } from "svelte/easing";
</script>

<svg
  transition:fly={{ duration: 500, x: -500, easing: circInOut }}
  class="w-6 h-auto fill-current cursor-pointer"
  on:click|stopPropagation|preventDefault
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  x="0px"
  y="0px"
  width="408px"
  height="408px"
  viewBox="0 0 408 408"
  style="enable-background:new 0 0 408 408;"
  xml:space="preserve">
  <g>
    <g id="arrow-back">
      <path
        d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z" />
    </g>
  </g>
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
</svg>
