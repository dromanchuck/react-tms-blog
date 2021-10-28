import { takeEvery, call, put } from "redux-saga/effects";

import { getPosts, getPost } from "../../services/posts";
import { ACTIONS } from "../constants";

function* getPostsSaga() {
  try {
    const posts = yield call(() => getPosts());

    yield put({ type: ACTIONS.GET_POSTS_SUCCESS, posts });
  } catch {}
}

function* getPostSaga(action) {
  const { id } = action;

  try {
    const post = yield call(() => getPost(id));

    yield put({ type: ACTIONS.GET_POST_SUCCESS, post });
  } catch {}
}

export function* postsWatcher() {
  yield takeEvery(ACTIONS.GET_POSTS, getPostsSaga);
  yield takeEvery(ACTIONS.GET_POST, getPostSaga);
}
