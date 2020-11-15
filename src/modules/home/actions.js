export const types = {
  LOAD_WEATHER: {
    REQUEST: 'LOAD_WEATHER.REQUEST',
    SUCCESS: 'LOAD_WEATHER.SUCCESS',
    FAILURE: 'LOAD_WEATHER.FAILURE',
  },
};

export const loadWeather = {
  request: ({ latitude, longitude, city }) => ({
    type: types.LOAD_WEATHER.REQUEST,
    payload: { latitude, longitude, city },
  }),
  success: (response) => ({
    type: types.LOAD_WEATHER.SUCCESS,
    payload: { ...response },
  }),
  failure: (error: Error) => ({
    type: types.LOAD_WEATHER.FAILURE,
    payload: { ...error },
  }),
};

