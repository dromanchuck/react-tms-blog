import { useHistory } from "react-router";

import { Button } from "../Button";
import { Container } from "../Container";

export const NotFound = () => {
  const history = useHistory();

  return (
    <Container title={"Page not found"}>
      <Button
        text={"Go home"}
        onClick={() => {
          history.push("/");
        }}
      />
    </Container>
  );
};
