import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/auth";
import { IPostsState, postsReducer } from "./reducers/posts";

export interface IState {
  posts: IPostsState;
}

export const store = createStore(
  combineReducers({ posts: postsReducer, auth: authReducer }),
  composeWithDevTools()
);
