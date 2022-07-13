import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Activation = () => {
  const params = useParams<{ uid: string; token: string }>();

  useEffect(() => {
    fetch("https://studapi.teachmeskills.by/auth/users/activation/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: params.token, uid: params.uid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
      });
  }, []);

  return (
    <h1>
      Спасибо за регистрацию! Аккаунт успешно зарегистрирован!{params.token}
      {params.uid}
    </h1>
  );
};
