import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { authReducer } from "./reducers/auth";
import { IPostsState, postsReducer } from "./reducers/posts";
import { postsWatcher } from "./sagas/postsSaga";

export interface IState {
  posts: IPostsState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ posts: postsReducer, auth: authReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(postsWatcher);
