import { AnyAction } from "redux";

import { IPost } from "../types";
import { ACTIONS } from "../constants";

export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
};

export const postsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS_SUCCESS: {
      return { ...state, posts: action.posts };
    }
    default:
      return state;
  }
};
