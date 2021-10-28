export async function getPosts() {
  const postsResponse = await fetch(
    "https://studapi.teachmeskills.by/blog/posts/?limit=100"
  );

  const json = await postsResponse.json();

  return json.results;
}

export async function getPost(id: number) {
  const postResponse = await fetch(
    `https://studapi.teachmeskills.by/blog/posts/${id}`
  );

  const json = await postResponse.json();

  return json;
}
