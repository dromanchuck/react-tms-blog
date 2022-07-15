import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { ITodosState, todosReducer } from "./todosReducer";

export interface IState {
  todosReducer: ITodosState;
}

export const store = createStore(
  combineReducers({ todosReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
