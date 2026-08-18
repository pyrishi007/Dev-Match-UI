import { createSlice } from "@reduxjs/toolkit";


const userComnectionSlice = createSlice({
    name: "connections",
    initialState: null,

    reducers: {
        addConnections: function (state, action) {
            return action.payload
        }
    }
})


export const { addConnections } = userComnectionSlice.actions;
export default userComnectionSlice.reducer;