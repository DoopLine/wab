<script context="module">
  export async function preload({ params }) {
    const [tag, number] = params.params;

    function handleOffline() {
      const posts = JSON.parse(localStorage.getItem(tag + number));
      if (!posts.length) throw new Error("Error on local storage!");
      return posts;
    }

    async function handleOnline() {
      let data;
      const res = await fetch(
        `https://dev.to/api/articles?tag=${tag}?&page=${number}`
      );
      data = await res.json();
      localStorage.setItem(tag + number, JSON.stringify(data));
      return data;
    }

    // init
    const isOnline = navigator.onLine;

    let data;
    let posts = [];

    if (isOnline) {
      data = await handleOnline();
    } else {
      data = handleOffline();
    }

    posts = data.map(_d =>
      Post(_d.id, _d.title, _d.description, _d["tag_list"], _d["cover_image"])
    );

    return { posts, number, tag };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  // import paginationStore from "../../stores/pagination";
  import PostsGrid from "../../components/PostsGrid.svelte";
  import Pagination from "../../components/Pagination.svelte";
  import LoadingOverlay from "../../components/LoadingOverlay.svelte";

  import Post from "../../models/Post";

  export let posts;
  export let number;
  export let tag;

  const lastPage = posts.length < 30;
  let isOnline;
  let isFetching = true;

  onMount(() => {
    isFetching = false;
  });

  async function getPost(id) {
    await goto(`/articles/${id}`);
  }

  async function nextPage() {
    isFetching = true;
    await goto(`/tags/${tag}/${++number}`);
    isFetching = false;
  }

  async function prevPage() {
    if (number <= 0) return;
    isFetching = true;
    await goto(`/tags/${tag}/${--number}`);
    isFetching = false;
  }
</script>

<svelte:head>
  <title>{`WAB - tag ${tag} / ${number}`}</title>
</svelte:head>

<Pagination
  on:prev={prevPage}
  on:next={nextPage}
  pageCount={number}
  {lastPage} />
<PostsGrid {posts} on:getpost={e => getPost(e.detail)} />
<Pagination
  on:prev={prevPage}
  on:next={nextPage}
  pageCount={number}
  {lastPage} />

{#if isFetching}
  <LoadingOverlay />
{/if}
