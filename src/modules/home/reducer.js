import { types } from './actions.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { types as authTypes } from '../auth/actions';

const initialState = {
  weather: {},
  error: null,
  spinnerState: {
    loading: false,
  },
};

const persistConfig = {
  key: 'home',
  storage: AsyncStorage,
  timeout: 120000,
  blacklist: ['spinnerState'],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_WEATHER.REQUEST: {
      return {
        ...state,
        spinnerState: {
          ...state.spinnerState,
          loading: true,
        },
      };
    }
    case types.LOAD_WEATHER.SUCCESS: {
      return {
        ...state,
        weather: action.payload,
        spinnerState: {
          ...state.spinnerState,
          loading: false,
        },
      };
    }
    case types.LOAD_WEATHER.FAILED: {
      return {
        ...state,
        error: action.payload,
        spinnerState: {
          ...state.spinnerState,
          loading: false,
        },
      };
    }
    case authTypes.SIGN_OUT.SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
}

export default persistReducer(persistConfig, reducer);
