import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { ACTIONS } from "../../redux/constants";
import { IState } from "../../redux/store";
import { Container } from "../Container";
import styles from "./Post.module.css";

export const Post = () => {
  const { id } = useParams<{ id: string }>();
  const post = useSelector((state: IState) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ACTIONS.GET_POST, id });
  }, []);

  return post && post.id === +id ? (
    <Container title={"Post"}>
      <div className={styles.container}>
        <img src={post.image} width={400} />
        <div>
          <h2>{post.title}</h2>
          <h3>{post.date}</h3>
          <p>{post.text}</p>
        </div>
      </div>
    </Container>
  ) : null;
};
