import { configureStore } from "@reduxjs/toolkit";
import subreddits from './features/subreditsSlice'

const store = configureStore({
    reducer: {subreddits}
})

export default store;