import { takeEvery, call, put } from "redux-saga/effects";

import { getPosts } from "../../services/posts";
import { ACTIONS } from "../constants";

function* getPostsSaga() {
  try {
    const posts = yield call(() => getPosts());

    yield put({ type: ACTIONS.GET_POSTS_SUCCESS, posts });
  } catch {}
}

export function* postsWatcher() {
  yield takeEvery(ACTIONS.GET_POSTS, getPostsSaga);
}
