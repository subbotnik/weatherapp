import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './auth/reducer';
import homeReducer from './home/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 120000,
};

export default persistReducer(
  persistConfig,
  combineReducers({
    home: homeReducer,
    auth: authReducer,
  })
);
