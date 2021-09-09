import { createAction, createReducer } from '@reduxjs/toolkit';

const setExample = createAction('example/EXAMPLE_ACTION');

const initialState = {
  key: 'value',
};

const exampleReducer = createReducer(initialState, {
  [setExample]: (state, action) => {
    return {
      ...state,
      key: action.payload,
    };
  },
});

export default exampleReducer;
