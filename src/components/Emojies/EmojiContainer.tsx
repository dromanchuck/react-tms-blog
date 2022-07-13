import { EmojiRow } from "./EmojiRow";
import { emojies } from "./constants";
import { Input } from "../Input/Input";
import styles from "./index.module.css";
import { useState } from "react";

interface IProps {
  title: string;
  symbol: string;
}

export const EmojiContainer = () => {
  const [searchText, setSearchText] = useState("");

  const filteredEmojies = emojies.filter(
    (emoji) =>
      emoji.title.toLowerCase().includes(searchText.toLowerCase()) ||
      emoji.keywords.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Input
        value={searchText}
        label=""
        placeholder=""
        className={styles.input}
        setValue={setSearchText}
      />
      <ul>
        {filteredEmojies.map(({ symbol, title }: IProps) => {
          return <EmojiRow key={title} title={title} symbol={symbol} />;
        })}
      </ul>
    </div>
  );
};
