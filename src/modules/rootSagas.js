import { all } from 'redux-saga/effects';

import authRootSaga from './auth/sagas';
import homeRootSaga from './home/sagas';

function* rootSaga() {
  yield all([
    authRootSaga(),
    homeRootSaga(),
  ]);
}

export default rootSaga;
