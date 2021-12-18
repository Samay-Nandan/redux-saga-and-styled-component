import { takeLatest } from "redux-saga/effects";
import { ACTION_TYPES_FOR_USER } from "./actionTypes/users";
import { fetchUser } from "./saga/fetchUser"

  export function* rootSaga() {
      
      yield takeLatest(ACTION_TYPES_FOR_USER.GET_USER_DATA, fetchUser)
      
  }