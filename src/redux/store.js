// ==lIBRARY IMPORTS==
import { configureStore } from "@reduxjs/toolkit";

// ==UTILS==
import userReducer from "../redux/features/userSlice";
import userFeedReducer from "../redux/features/userFeedSlice";
import userConnectionReducer from "./features//userConnectionSlice"
import userRequestReducer from "./features/userRequestSlice"

//STORE
const store = configureStore({
  reducer: {
    //user store
    user: userReducer,
    feed: userFeedReducer,
    request: userRequestReducer,
    connection: userConnectionReducer
  },
});

export default store;
