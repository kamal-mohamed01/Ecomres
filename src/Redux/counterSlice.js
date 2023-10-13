


import { createSlice } from "@reduxjs/toolkit";


let initialState = {product:[] , loading:false, isError:null}
let counterSlice = createSlice({
    name:'productSlice',
    initialState,
    reducers:{
        increase:(state)=>{
            state.counter +=1
        },
        decrease:(state)=>{
            state.counter -=1
        },
    }
})


export let counterReducer = counterSlice.reducer
export let {increase , decrease} = counterSlice.actions

