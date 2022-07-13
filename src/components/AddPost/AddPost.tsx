import { useState } from "react";

import styles from "./AddPost.module.css";

import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { tmsFetch } from "../../fetch";

export const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<Blob | null>(null);

  const onLoad = (event: any) => {
    setImageFile(event.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      setImage(event.target.result);
    };
  };

  const removeImage = () => {
    setImage("");
    setImageFile(null);
  };

  const createNewPost = () => {
    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    }

    formData.append("text", text);
    formData.append("title", title);
    formData.append("lesson_num", String(number));

    tmsFetch("https://studapi.teachmeskills.by/blog/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      body: formData,
    });
  };

  return (
    <>
      <div className={styles.addPostIndex}>
        <div className={styles.addPostWrraper}>
          <Title text="Add new post" />
          <div className={styles.addPost}>
            <div className={styles.addText}>
              <Input
                label="Title"
                placeholder="Title"
                value={title}
                setValue={(text) => setTitle(text)}
              />
              <Input
                label="Lesson number"
                value={number}
                placeholder={"Lesson number"}
                setValue={(text) => setNumber(text)}
              />
              <textarea value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <div className={styles.addImg}>
              {image ? (
                <>
                  <img src={image} />
                  <Button text="remove image" onClick={removeImage} disabled />
                </>
              ) : (
                <p className={styles.addName}>Image</p>
              )}

              <div className={styles.addBtn}>
                {image ? null : (
                  <>
                    <div style={{ position: "absolute" }}>
                      <Button text="Add" onClick={() => {}} disabled></Button>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={onLoad}
                      style={{
                        width: "100%",
                        height: "100%",
                        zIndex: 100,
                        opacity: 0,
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.addManeBtn}>
            <Button text="Add" onClick={createNewPost} disabled></Button>
          </div>
        </div>
      </div>
    </>
  );
};
