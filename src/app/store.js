import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import contactReducer from "../features/contactSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        contact: contactReducer
    }
})

export default store;