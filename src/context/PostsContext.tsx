import { createContext, ReactNode, useEffect, useState } from "react";
import { Modal } from "../components/PostsList/PostsList";

interface IProps {
  children: ReactNode;
}

export const PostsContext = createContext<any>({});
const LIMIT = 10;
export const PostsProvider = ({ children }: IProps) => {
  const [posts, setPosts] = useState([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const promise = fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${0}`
    );

    promise
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data?.count > data?.results.length) {
          setIsLoadMore(true);
        }

        setPosts(data?.results);
      });
  }, []);

  const loadMore = async () => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${posts.length}`
    );

    const json = await response.json();
    const newPosts = posts.concat(json.results);

    if (json.count === newPosts.length) {
      setIsLoadMore(false);
    }

    setPosts(newPosts);
  };

  return (
    <PostsContext.Provider value={{ posts, loadMore, isLoadMore }}>
      {children}
      {content ? <Modal onClose={() => setContent(null)}>{content}</Modal> : null}
    </PostsContext.Provider>
  );
};
