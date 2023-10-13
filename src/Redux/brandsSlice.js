import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let getbrands = createAsyncThunk('brandsSlice/getbrands' , 
    async ()=>{
        let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        return data.data;
}


)


let initialState = {brands:[] ,loading:false , isError:null}
let brandsSlice = createSlice({
    name:'brandsSlice',
    initialState,
    extraReducers:{
        [getbrands.pending]:(state ,action)=>{
            state.loading = true
        },
        [getbrands.fulfilled]:(state ,action)=>{
                state.brands = action.payload
                state.loading = false
        },
        [getbrands.rejected]:(state ,action)=>{
                // state.isError = action.payload
                state.loading = false
        }
    }
})

export let brandsReducer =brandsSlice.reducer