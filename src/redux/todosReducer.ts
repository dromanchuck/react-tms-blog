interface ITodo {
  id: string;
  text: string;
}

export interface ITodosState {
  todos: ITodo[];
}

const defaultState: ITodosState = {
  todos: [],
};

export const todosReducer = (state = defaultState, action: any) => {
  if (action.type === "addTodo") {
    return { ...state, todos: [...state.todos, action.todo] };
  }

  if (action.type === "removeTodo") {
    const newTodos = state.todos.filter((item) => {
      if (item.id === action.id) {
        return false;
      }

      return true;
    });
    return { ...state, todos: newTodos };
  }

  return state;
};
