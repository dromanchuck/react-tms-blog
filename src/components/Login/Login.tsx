import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../Button";
import { Input } from "../Input";
import styles from "./Login.module.css";
import { Container } from "../Container";
import { FormContainer } from "../FormContainer";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <Container title="Login">
      <FormContainer>
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
          text="Login"
          onClick={() => {
            dispatch({ type: "LOGIN", email, password });
          }}
        />
      </FormContainer>
    </Container>
  );
};
