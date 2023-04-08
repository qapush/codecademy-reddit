import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (data) => {
        const {subreddit, postId} = data;
        const res = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}.json`);
        const resp = await res.json();
        return resp;
    }
);

const initialState = {
    comments: [],
    postId: '',
    subreddit: ''
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload[1].data.children;
        })
    }
})

export const selectComments = state => state.comments.comments;
export default commentsSlice.reducer;