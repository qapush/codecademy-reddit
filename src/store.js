import { configureStore } from "@reduxjs/toolkit";
import subreddits from './features/subreditsSlice'
import feed from "./features/feedSlice";
import mobileMenu from "./features/mobileMenuSlice";

const store = configureStore({
    reducer: {
        subreddits,
        feed,
        mobileMenu
    }
})

export default store;