import { all, takeLatest, call, put } from 'redux-saga/effects';
import { types, loadWeather } from './actions';
import isEmpty from 'lodash/isEmpty';
import api from '~/api';

function* loadWeatherRequest(action) {
  const { latitude, longitude, city = null } = action.payload;
  const {
    response,
    error,
  } = yield call(api.loadWeather, { latitude, longitude, city });

  if (!isEmpty(response)) {
    yield put(loadWeather.success(response));
  } else {
    yield put(loadWeather.failed(error));
  }
}

function* rootSaga() {
  yield all([takeLatest(types.LOAD_WEATHER.REQUEST, loadWeatherRequest)]);
}

export default rootSaga;
