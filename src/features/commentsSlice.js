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
    commentsLoading: false,
    commentsError: false
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchComments.pending, (state) => {
            state.commentsLoading = true;
            state.commentsError = false;
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.commentsLoading = false;
            state.commentsError = false;
        })
        .addCase(fetchComments.rejected, (state) => {
            state.commentsLoading = false;
            state.commentsError = true;
        })
    }
})

export const selectComments = state => state.comments.comments;
export default commentsSlice.reducer;
export const selectCommentsLoading = state => state.comments.commentsLoading;