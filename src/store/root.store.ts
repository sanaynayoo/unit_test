import {configureStore} from '@reduxjs/toolkit';
import {imageActions, imageReducer} from './imges';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

export const actions = {
  image: imageActions,
};

const reducers = {
  image: imageReducer,
};

export const store = configureStore({
  reducer: reducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
