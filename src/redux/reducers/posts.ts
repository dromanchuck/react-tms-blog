import { AnyAction } from "redux";

import { IPost } from "../types";
import { posts } from "../mock/posts";

export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: posts,
};

export const postsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
