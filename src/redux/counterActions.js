import { Type } from './type';
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction(Type.INCREMENT)
export const decrement = createAction(Type.DECREMENT)
