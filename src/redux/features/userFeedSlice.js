import { createSlice } from "@reduxjs/toolkit";

const userFeedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addUserFeed: function (state, action) {
      return action.payload;
    },
    removeUserFeed: function () {
      return null;
    },
  },
});

export const { addUserFeed, removeUserFeed } = userFeedSlice.actions;

export default userFeedSlice.reducer;
