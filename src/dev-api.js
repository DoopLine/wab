export const getTags = async ()=> {
   const res = await fetch("https://dev.to/api/tags?per_page=6");
   const tags = await res.json();
   return tags;
}