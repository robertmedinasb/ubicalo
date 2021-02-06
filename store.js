import { configureStore } from '@reduxjs/toolkit';
import configAppReducer from './slices/configAppSlice';

export default configureStore({
  reducer: {
    configApp: configAppReducer,
  },
});
