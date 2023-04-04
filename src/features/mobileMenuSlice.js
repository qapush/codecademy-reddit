import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        mobileMenuOpened: false
    },
    reducers: {
        mobileMenuToggle(state){
            state.mobileMenuOpened = !state.mobileMenuOpened
        },
        mobileMenuClose(state){
            state.mobileMenuOpened = false;
        },
    }
}) 

export default mobileMenuSlice.reducer;
export const {mobileMenuToggle, mobileMenuClose} = mobileMenuSlice.actions;
export const selectMobileMenuOpened = state => state.mobileMenu.mobileMenuOpened;