import { createSlice } from "@reduxjs/toolkit";

const userRequestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        addRequestUser: function (state, action) {
            return action.payload
        },
        removeRequestUser: (state, action) => {
            state.connectionInfo = state.connectionInfo.filter(
                (request) => request._id !== action.payload
            );
        },
    }
})

export const { addRequestUser, removeRequestUser } = userRequestSlice.actions;
export default userRequestSlice.reducer