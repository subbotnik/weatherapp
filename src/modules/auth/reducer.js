import { types } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isSignedIn: false,
  spinnerState: {
    loginLoading: false,
  },
};

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  timeout: 120000,
  blacklist: ['spinnerState'],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGN_IN.SUCCESS: {
      return {
        ...state,
        isSignedIn: true,
      };
    }
    case types.SIGN_OUT.SUCCESS: {
      return initialState;
    }
    default:
      return state;
  }
}

export default persistReducer(persistConfig, reducer);
