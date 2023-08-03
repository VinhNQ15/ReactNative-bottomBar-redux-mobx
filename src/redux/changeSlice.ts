import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'counter',
  initialState:{ name: '' },
  reducers: {
    updateUserName: (state, action) => {
        state.name = action.payload;
      },
  },
});

export const { updateUserName} = userSlice.actions;
export default userSlice.reducer;
