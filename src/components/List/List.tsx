import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input/Input";
import { TodoItem } from "../TodoItem/TodoItem";

const getId = () => "_" + Math.random().toString(16).slice(2);

const staticTodos = [
  { text: "1234", id: getId() }, // => <TodoItem text={'1234'}/>
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
  { text: "1234", id: getId() },
];

export const List = () => {
  const [todos, setTodos] = useState<{ text: string; id: string }[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length < 5) {
      alert("Не делай так больше");
    } else {
      setTodos(todos.concat([{ text: text, id: getId() }]));
      setText("");
    }
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((item) => {
      if (item.id === id) {
        return false;
      }

      return true;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        <Input
          label={"Добавить тудушку"}
          placeholder="Ну сделай уже что-нибудь"
          value={text}
          setValue={setText}
        />
        <Button text="Добавить" onClick={addTodo} disabled={false} />
      </div>

      <ul>
        {todos.map((item, index, arr) => {
          const removeTodoWithId = () => {
            removeTodo(item.id);
          };

          return (
            <TodoItem
              key={item.id}
              text={item.text}
              removeTodo={removeTodoWithId}
            />
          );
        })}
      </ul>
    </div>
  );
};
