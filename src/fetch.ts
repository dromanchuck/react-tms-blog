export const tmsFetch = async (url: string, config: RequestInit) => {
  const access = localStorage.getItem("access");

  config.headers = access
    ? { ...config.headers, Authorization: `Bearer ${access}` }
    : config.headers;

  const response = await fetch(url, config);

  //refresh token logic
  if (response.ok === false) {
    const error = await response.json();

    const isExpired = error.messages.some((elem: { message: string }) =>
      elem.message.includes("expired")
    );

    if (isExpired) {
      const refresh = localStorage.getItem("refresh");

      const responseToken = await fetch("https://studapi.teachmeskills.by/auth/jwt/refresh/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refresh }),
      });

      if (responseToken.ok) {
        const result = await responseToken.json();

        localStorage.setItem("access", result.access);

        const refreshedResponse = await fetch(url, {
          ...config,
          headers: {
            ...config?.headers,
            Authorization: `Bearer ${result.access}`,
          },
        });

        return refreshedResponse;
      }
    }
  }

  return response;
};
