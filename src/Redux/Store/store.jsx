import {configureStore} from "@reduxjs/toolkit";
import postApiReducer from "../Reducers/postApiReducer";
export const store = configureStore({
    reducer:{
        postData: postApiReducer,
    },
})