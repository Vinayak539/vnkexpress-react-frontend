import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userslice';
import infoReducer from '../features/infoSlice';

export default configureStore({
   reducer: {
    user : userReducer,
    info : infoReducer,
   },
 })