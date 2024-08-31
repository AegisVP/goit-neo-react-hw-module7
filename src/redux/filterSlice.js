import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
