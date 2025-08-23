import { createSlice } from "@reduxjs/toolkit";

const cacheSlice=createSlice({
    name:'cache',
    initialState:{

    },
    reducers:{
        cacheData:(state,action)=>{
            Object.assign(state, action.payload);
        }
    }
})

export const {cacheData}=cacheSlice.actions;
export default cacheSlice.reducer;