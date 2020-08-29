import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reduxBatch }  from '@manaflair/redux-batch';
import logger from 'redux-logger';

import counterReducer from './views-demo/counter/counterSlice';
import booksReducer from './views-demo/books/booksSlice';
import unpackListReducer from './views/unpackList/store';

const middleware = getDefaultMiddleware().concat(logger);
const reducer =  {
  counter: counterReducer,
  books: booksReducer,
  unpacks: unpackListReducer
}

export const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch]
})

export type RootState = ReturnType<typeof store.getState>;