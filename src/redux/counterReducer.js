import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counterActions';

const initialState = 0;

export default createReducer(initialState, {
    [increment]: (state, action) => {
        return state + action.payload;
    },
    [decrement]: (state, action) => {
        return state - action.payload;
    }
});
