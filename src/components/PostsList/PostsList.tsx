import styles from "./index.module.css";
import { Post } from "../Post/Post";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IPost } from "../../types/post";
import { Context } from "../../context/ThemeContext";
import { PostsContext } from "../../context/PostsContext";

export const ListPosts = () => {
  const history = useHistory();
  const context = useContext(Context);
  const postsContext = useContext(PostsContext);
  const { isDark } = context;

  useEffect(() => {
    
  }, []);

  return (
    <div className={`${styles.container} ${isDark ? styles.darkContainer : ""}`}>
      {postsContext.posts.map(({ image, date, text, title, id }: IPost) => {
        const onClickPost = () => {
          history.push("/post/" + id);
        };

        return (
          <div onClick={onClickPost}>
            <Post key={title} title={title} image={image} date={date} text={text} id={id} />
          </div>
        );
      })}
    </div>
  );
};
