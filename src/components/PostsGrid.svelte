<script>
  import { createEventDispatcher } from "svelte";
  import PostCard from "./PostCard.svelte";

  export let posts = [];

  const dispatch = createEventDispatcher();
</script>

<style>

</style>

<section class="flex flex-wrap">
  {#each posts as post}
    <PostCard on:click={() => dispatch('getpost', post.id)} {post} />
  {:else}
    <h1 class="text-4xl">Nenhum Artigo encontrádo!</h1>
  {/each}
</section>
