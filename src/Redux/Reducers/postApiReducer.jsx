import {createSlice} from '@reduxjs/toolkit';
import { fetchData } from '../Actions/postApiAction';
const postApiReducer = createSlice({
    name:'post',
    initialState:{
        data:[],
        loading:false,
        error:null,
    },
    reducer:{},
    extraReducer:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
            // return state.data;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export default postApiReducer.reducer;