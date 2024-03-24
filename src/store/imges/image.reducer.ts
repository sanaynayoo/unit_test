import {PayloadAction} from '@reduxjs/toolkit';
import {ImageEntity, ImageState} from './image.entity';

export default {
  'image/load': (state: ImageState, action: PayloadAction<ImageEntity[]>) => {
    state.listImages = action.payload;
  },
};
