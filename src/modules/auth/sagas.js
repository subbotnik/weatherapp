import { all, takeLatest, put } from 'redux-saga/effects';
import { types, signIn, signOut } from './actions';

function* signInRequest(action) {
  try {
    // your request
    yield put(signIn.success());
  } catch (e) {
    yield put(signIn.failed());
  }
}
function* signOutRequest(action) {
  try {
    // your request
    yield put(signOut.success());
  } catch (e) {
    yield put(signOut.failed());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.SIGN_IN.REQUEST, signInRequest),
    takeLatest(types.SIGN_OUT.REQUEST, signOutRequest),
  ]);
}