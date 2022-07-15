import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { Button } from "../Button";
import { Input } from "../Input/Input";
import { TodoItem } from "../TodoItem/TodoItem";

const getId = () => "_" + Math.random().toString(16).slice(2);

export const ReduxList = () => {
  const todos = useSelector((state: IState) => state.todosReducer.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length < 5) {
      alert("Не делай так больше");
    } else {
      dispatch({ type: "addTodo", todo: { text: text, id: getId() } });
      setText("");
    }
  };

  const removeTodo = (id: string) => {
    dispatch({ type: "removeTodo", id });
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

          return <TodoItem key={item.id} text={item.text} removeTodo={removeTodoWithId} />;
        })}
      </ul>
    </div>
  );
};
