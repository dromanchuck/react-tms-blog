import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../components/Post/Post";
import { IPost } from "../types/post";

export const FullPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const promise = fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`);

    promise
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setPost(data);
      });
  }, [id]);

  return post ? <Post {...post} /> : null;
};
