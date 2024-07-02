import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedGroup: null,
};

const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    selectGroup: (state, action) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { selectGroup } = groupSlice.actions;

export default groupSlice.reducer;
