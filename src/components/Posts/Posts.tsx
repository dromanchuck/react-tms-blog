import { useSelector } from "react-redux";

import { IState } from "../../redux/store";
import { Container } from "../Container";

import { PostCard } from "../PostCard";
import styles from "./Posts.module.css";

export const Posts = () => {
  const posts = useSelector((state: IState) => state.posts.posts);

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
