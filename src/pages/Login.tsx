import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../components/Button";
import { Input } from "../components/Input/Input";
import { Title } from "../components/Title/Title";
import { AuthContext } from "../context/AuthContext";
import { Context } from "../context/ThemeContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(Context);
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const onClick = () => {
    fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data?.detail) {
          alert("Ошибка");
        }

        if (data?.access) {
          localStorage.setItem("access", data?.access);
          localStorage.setItem("refresh", data?.refresh);

          history.push("/");

          return fetch("https://studapi.teachmeskills.by/auth/users/me/", {
            method: "GET",
            headers: { Authorization: `Bearer ${data?.access}` },
          });
        }
      })
      .then((response) => {
        return response?.json();
      })
      .then((data) => {
        authContext.setUser(data);
      });
  };

  const onClick2 = async () => {
    const response = await fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data?.detail) {
      alert("Ошибка");
    }

    if (data?.access) {
      localStorage.setItem("access", data?.access);
      localStorage.setItem("refresh", data?.refresh);

      history.push("/");

      const resp = await fetch("https://studapi.teachmeskills.by/auth/users/me/", {
        method: "GET",
        headers: { Authorization: `Bearer ${data?.access}` },
      });

      const profile = await resp.json();
      authContext.setUser(profile);
    }
  };

  return (
    <div
      style={{
        backgroundColor: context.isDark ? "#000" : "#fff",
      }}
    >
      <Title text="Login" />
      <Input value={email} setValue={setEmail} label={"Email"} placeholder="email" />
      <Input value={password} setValue={setPassword} label="Password" placeholder="password" />
      <Button text="Login" onClick={onClick} type="primary" disabled={false} />
    </div>
  );
};
