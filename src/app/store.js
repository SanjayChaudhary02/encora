import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../features/userSlice";
import todoReducer from "../features/todoSlice";

export default configureStore({
    reducer:{
        user: useReducer,
        todo: todoReducer
    }
})