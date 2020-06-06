<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { goto } from "@sapper/app";
  import { getTags } from "../dev-api";

  //   const Tag = (id, name, bg_color_hex, text_color_hex) => ({
  //     id,
  //     name,
  //     bg_color_hex,
  //     text_color_hex,
  //   });
  export let dispatchClose = true;

  const dispatch = createEventDispatcher();
  let tags = [];
  let loading = true;

  onMount(async () => {
    try {
      tags = await getTags();
    } catch (error) {
      tags = [];
      console.log(error);
    } finally {
      loading = false;
    }
  });

  const onClickTag = async (tag) => {
    if (dispatchClose) dispatch("close");
    await goto(`/tags/${tag.name}/1`);
  };
</script>

<style>

</style>

<article class="flex flex-wrap justify-center m-2 text-white">
  {#each tags as tag}
    <p
      on:click|stopPropagation={() => onClickTag(tag)}
      class="font-semibold my-1 mx-2 cursor-pointer hover:cursor-pointer hover:text-primary-600
      px-2"
      style={`color:${tag.text_color_hex}; background:${tag.bg_color_hex}`}>
      #{tag.name}
    </p>
  {:else}
    {#if loading}
      <p class="text-xl text-center w-full">Carrendo Tags...</p>
    {:else}
      <p class="text-xl text-center w-full">Erro ao Carregar Tags</p>
    {/if}
  {/each}
</article>
