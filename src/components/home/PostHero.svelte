<script>
  import { goto } from "@sapper/app";
  import Post from "../../models/Post";

  export let post = Post();
</script>

<header
  on:click
  class="relative cursor-pointer flex max-w-screen-xl flex-col justify-center
  items-center mb-8 -mt-20 py-20 px-10 text-white text-center">
  <img
    class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
    src={post.img}
    alt={post.title} />
  <div
    class="absolute top-0 left-0 w-full h-full bg-black opacity-50
    pointer-events-none" />
  <span class="relative flex flex-wrap justify-center">
    {#each post.tags as tag}
      <p
        on:click|stopPropagation={async () => await goto(`/tags/${tag}/1`)}
        class="font-semibold text-white my-1 mx-2 hover:cursor-pointer
        hover:text-primary-100">
        #{tag}
      </p>
    {/each}
  </span>
  <h1 class="relative text-4xl md:text-6xl font-bold">{post.title}</h1>
  <h3 class="relative text-gray-100 text-lg px-4 pb-4">{post.desc}</h3>
</header>
