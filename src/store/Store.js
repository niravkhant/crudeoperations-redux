import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/CounterSlice";
import UserDetailSlice from "./slices/UserDetailSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        app: UserDetailSlice,
    },
});
