export async function getPosts() {
  const postsResponse = await fetch(
    "https://studapi.teachmeskills.by/blog/posts/?limit=100"
  );

  const json = await postsResponse.json();

  return json.results;
}
