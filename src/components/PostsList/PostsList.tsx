import styles from "./index.module.css";
import { Post } from "../Post/Post";
import { ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { IPost } from "../../types/post";
import { Context } from "../../context/ThemeContext";
import { PostsContext } from "../../context/PostsContext";
import { Button } from "../Button";
import { Title } from "../Title/Title";
import { Input } from "../Input/Input";

export const ListPosts = () => {
  const history = useHistory();
  const context = useContext(Context);
  const postsContext = useContext(PostsContext);
  const { isDark } = context;
  const [isModalShowed, setIsModalShowed] = useState(false);

  return (
    <>
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
        {postsContext.isLoadMore ? (
          <Button text="Загрузить еще" disabled={false} onClick={postsContext.loadMore} />
        ) : null}
        <Button text="Открыть модалку" disabled={false} onClick={() => postsContext.setContent} />
      </div>
      {isModalShowed ? <LoginModal /> : null}
    </>
  );
};

interface IProps {
  children: ReactNode;
  onClose: () => void;
}

export const LoginModal = ({ onClose }: any) => {
  return (
    <Modal onClose={onClose}>
      <Title text="Login" />
      <Input value={"email"} setValue={() => {}} label={"Email"} placeholder="email" />
      <Input value={"password"} setValue={() => {}} label="Password" placeholder="password" />
      <Button text="Login" onClick={() => {}} type="primary" disabled={false} />
    </Modal>
  );
};

export const Modal = ({ children, onClose }: IProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.5 }}
        onClick={onClose}
      />
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "12px",
          boxSizing: "border-box",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          minWidth: 100,
          minHeight: 100,
        }}
      >
        <Button text={"X"} onClick={onClose} disabled={false} />
        {children}
      </div>
    </div>
  );
};
