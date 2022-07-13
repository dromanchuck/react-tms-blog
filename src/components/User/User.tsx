import { Button } from "../Button/Button";

interface IProps {
  username: string;
}

function getInitials(username: string): string {
  const arr = username.split(" ");

  if (arr.length === 1) {
    return arr[0][0];
  }

  return arr[0][0] + arr[1][0];
}

export const User = ({ username }: IProps) => {
  return (
    <div style={{ border: "1px solid #000" }}>
      <Button disabled={false} text={getInitials(username)} type="primary" />
      <p>{username}</p>
    </div>
  );
};
