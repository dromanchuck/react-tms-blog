import { useState } from "react";
import { Button } from "../Button";

export const Clicker = () => {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>{count}</p>
      <div>
        <Button text="+" type="primary" onClick={increment} disabled={false} />
        <Button
          text="Reset"
          type="secondary"
          onClick={reset}
          disabled={false}
        />
        <Button
          text="-"
          type="secondary"
          onClick={decrement}
          disabled={false}
        />
      </div>
    </div>
  );
};
