import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ACTIONS } from "../../redux/constants";
import { IState } from "../../redux/store";
import { IPost } from "../../redux/types";
import { Button } from "../Button";
import { Container } from "../Container";

import { PostCard } from "../PostCard";
import styles from "./Posts.module.css";

function getPostsPerPage(allPosts: IPost[], page: number) {
  return allPosts.slice(0, (page + 1) * 3);
}

export const Posts = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state: IState) => state.posts.posts);
  const totalPages = allPosts.length / 3;

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_POSTS });
  }, []);

  const posts = getPostsPerPage(allPosts, page);

  return (
    <Container title={"Posts"}>
      <div className={styles.content}>
        {posts.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
        {totalPages > 1 && page < totalPages ? (
          <Button
            text={"See more"}
            onClick={() => {
              const newPage = page + 1;
              setPage(newPage);
            }}
          />
        ) : null}
      </div>
    </Container>
  );
};
