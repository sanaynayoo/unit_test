import axios from 'axios';
import {actions} from './image.slice';
import {Dispatch} from '@reduxjs/toolkit';
import {dispatchable} from '../dispatchable';

export type Action = {
  type: string;
  payload?: any;
};

export const getListImage = dispatchable(
  () => async (dispatch: Dispatch<Action>) => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/photos',
      );
      dispatch(actions['image/load'](result.data));
      return {
        success: true,
        data: result.data,
      };
    } catch (error) {
      return {
        success: false,
        data: null,
      };
    }
  },
);