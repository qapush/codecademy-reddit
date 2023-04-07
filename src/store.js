import { configureStore } from "@reduxjs/toolkit";
import subreddits from './features/subreditsSlice'
import feed from "./features/feedSlice";
import mobileMenu from "./features/mobileMenuSlice";
import comments from "./features/commentsSlice";

const store = configureStore({
    reducer: {
        subreddits,
        feed,
        mobileMenu,
        comments
    }
})

export default store;