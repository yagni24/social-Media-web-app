import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
export const fetchData = createAsyncThunk('postData/fetchData',async()=>{
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = response.data;
        console.log(data)
        return data;
        
    }
    catch (error){
        console.error('Error:',error);
        throw error;
    }
}) 
