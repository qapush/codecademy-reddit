import { configureStore } from "@reduxjs/toolkit";
import subreddits from './features/subreditsSlice'
import feed from "./features/feedSlice";

const store = configureStore({
    reducer: {
        subreddits,
        feed
    }
})

export default store;