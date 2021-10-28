import { takeEvery } from "@redux-saga/core/effects";

import { ACTIONS } from "../constants";

function*registerUserSaga({email, password, username}) {
  try {

  } catch(error) {
    
  }
}

export function authSaga() {
  yield takeEvery(ACTIONS.REGISTER_USER, registerUserSaga)
}