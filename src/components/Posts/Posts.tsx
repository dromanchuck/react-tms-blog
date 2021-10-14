import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/constants";

import { IState } from "../../redux/store";
import { getPosts } from "../../services/posts";
import { Container } from "../Container";

import { PostCard } from "../PostCard";
import styles from "./Posts.module.css";

export const Posts = () => {
  const posts = useSelector((state: IState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts().then((posts) => {
      dispatch({ type: ACTIONS.GET_POSTS_SUCCESS, posts });
    });
  }, []);

  return (
    <Container title={"Posts"}>
      <div className={styles.content}>
        {posts.map((item) => (
          <PostCard key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};
