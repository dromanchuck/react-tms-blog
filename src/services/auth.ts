export const register = (username: string, email: string, password: string) => {
  return fetch("https://studapi.teachmeskills.by/auth/users/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
};
