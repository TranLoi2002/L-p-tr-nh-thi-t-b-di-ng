
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer:{
    counter : counterReducer,
  },
});
console.log(store);

export default store;