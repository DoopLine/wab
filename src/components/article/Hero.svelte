<script>
  import { goto } from "@sapper/app";

  export let title;
  export let cover;
  export let tags;
</script>

<style>

</style>

<header
  class="relative flex flex-col max-w-screen-xl justify-center items-center
  mb-20 -mt-20 py-20 px-10 text-white text-center">
  <img
    class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
    src={cover}
    alt={title} />
  <div
    class="absolute top-0 left-0 w-full h-full bg-black opacity-50
    pointer-events-none" />
  <span class="relative flex flex-wrap justify-center">
    {#each tags as tag}
      <p
        on:click|stopPropagation={async () => await goto(`/tags/${tag}/1`)}
        class="font-semibold text-white my-1 mx-2 hover:cursor-pointer
        hover:text-primary-100">
        #{tag}
      </p>
    {/each}
  </span>
  <h1 class="relative text-4xl md:text-6xl font-bold">{title}</h1>
</header>
