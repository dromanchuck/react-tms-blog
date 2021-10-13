import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./Register.module.css";
import { Container } from "../Container";
import { FormContainer } from "../FormContainer";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  return (
    <Container title="Register">
      <FormContainer>
        <div className={styles["input-container"]}>
          <Input
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setUsername(event.target.value)
            }
            placeholder={"Username"}
          />
        </div>
        <div className={styles["input-container"]}>
          <Input
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            placeholder={"Email"}
          />
        </div>
        <div className={styles["input-container"]}>
          <Input
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
            placeholder={"Password"}
            isHidden
          />
        </div>

        <Button
          text="Register user"
          onClick={() => {
            dispatch({ type: "REGISTER", email, password });
          }}
        />
      </FormContainer>
    </Container>
  );
};
