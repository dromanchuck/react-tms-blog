import { AnyAction } from "redux";

import { IPost } from "../types";
import { ACTIONS } from "../constants";

export interface IPostsState {
  posts: IPost[];
  post: IPost | null;
}

const defaultState: IPostsState = {
  posts: [],
  post: null,
};

export const postsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_POSTS_SUCCESS: {
      return { ...state, posts: action.posts };
    }
    case ACTIONS.GET_POST_SUCCESS: {
      return { ...state, post: action.post };
    }
    default:
      return state;
  }
};
