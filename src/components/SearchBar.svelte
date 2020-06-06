<script>
  import { fade } from "svelte/transition";
  import { goto } from "@sapper/app";
  import { createEventDispatcher } from "svelte";
  import { SearchMajorMonotone } from "svelte-polaris-icons";

  export let className = "";
  export let dispatchClose = true;

  const dispatch = createEventDispatcher();
  let searchValue = "";

  const onSubmitForm = async () => {
    if (!searchValue) return;
    if (dispatchClose) dispatch("close");
    await goto(`/tags/${searchValue}/1`);
  };
</script>

<form
  on:submit|preventDefault={onSubmitForm}
  class={'flex items-center my-2 p-2 bg-white ' + className}
  transition:fade>
  <SearchMajorMonotone
    on:click={onSubmitForm}
    class="w-5 mr-1 fill-current text-primary-500 cursor-pointer" />
  <input
    type="text"
    class="w-full px-2 outline-none"
    bind:value={searchValue} />
</form>
