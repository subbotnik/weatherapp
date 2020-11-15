import { createSelector } from 'reselect';
import get from 'lodash/get';

const homeRootSelector = (state) => state.home;

export const weatherSelector = createSelector(
  homeRootSelector,
  (root) => root.weather,
);



export const locationNameSelector = createSelector(
  weatherSelector,
  (weatherRoot) => get(weatherRoot, 'name', '-'),
);
export const temperatureSelector = createSelector(
  weatherSelector,
  (weatherRoot) => get(weatherRoot, 'main.temp', '-'),
);
export const feelsLikeSelector = createSelector(
  weatherSelector,
  (weatherRoot) => get(weatherRoot, 'main.feels_like', '-'),
);
export const minTemperatureSelector = createSelector(
  weatherSelector,
  (weatherRoot) => get(weatherRoot, 'main.temp_min', '-'),
);
export const maxTemperatureSelector = createSelector(
  weatherSelector,
  (weatherRoot) => get(weatherRoot, 'main.temp_max', '-'),
);


export const weatherSpinnerStateSelector = createSelector(
  homeRootSelector,
  (root) => root.spinnerState,
);