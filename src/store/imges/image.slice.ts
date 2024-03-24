import {createSlice} from '@reduxjs/toolkit';
import {ImageState} from './image.entity';
import imageReducer from './image.reducer';

export const initialState: ImageState = {
  listImages: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: imageReducer,
});

export const {actions, reducer} = imageSlice;
