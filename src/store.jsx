import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { example } from 'src/modules';

const rootReducer = combineReducers({ example });

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
