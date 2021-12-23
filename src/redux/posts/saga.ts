import { all, takeLatest, call, put } from "redux-saga/effects";
import { getPosts as getPostsQuery } from "./query";

import { getPosts, getPostsStatus, getPostsError } from "./reducer";

export function* getPostsSaga() {
  try {
    const { data } = yield call(getPostsQuery);

    const posts = data;
    yield put(getPostsStatus(posts));
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error catched ", err);
      yield put(getPostsError(err));
    }
  }
}

export default function* postsManagerSaga() {
  yield all([takeLatest(getPosts, getPostsSaga)]);
}
