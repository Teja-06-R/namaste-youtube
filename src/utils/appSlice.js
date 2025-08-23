import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true,
        darkmode:false,
    },
    reducers:{
       toggleMenu:(state)=>{
        state.isMenuOpen=!state.isMenuOpen;
       },
       closeMenu:(state)=>{
        state.isMenuOpen=false;
       },
       toggleTheme:(state)=>{
        state.darkmode=!state.darkmode;
       },
    }
})
export const {toggleMenu,closeMenu,toggleTheme} =appSlice.actions;
export default appSlice.reducer;