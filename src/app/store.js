import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import contactReducer from "../features/contactSlice";
import chatReducer from "../features/chatSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        contact: contactReducer,
        chat : chatReducer
    }
})

export default store;