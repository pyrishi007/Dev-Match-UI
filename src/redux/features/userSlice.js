// ==UTILS==
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,

  //Dispatch action
  reducers: {
    addUser: function (state, action) {
      //anything return from always get store in state
      return action.payload;
    },
    removeUser: function () {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
