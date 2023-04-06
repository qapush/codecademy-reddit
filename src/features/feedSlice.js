import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/get',
    async (feed) => {
        const data = await fetch(`https://www.reddit.com/${feed.toLowerCase()}.json`);
        const res = await data.json();
        return res;
    }
)

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        feedLoading: false,
        feedError: false, 
        currentFeed: "Best"
    },
    reducers: {
        currentFeedChange(state, action) {
            state.currentFeed = action.payload;
        }   
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.feedLoading = true;
                state.feedError = false;
        } )
            .addCase(fetchFeed.fulfilled, (state, action) => {
                console.log(action.payload)
                state.feed = action.payload.data.children.map(el => {
                        const { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media } = el.data;
                        return { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media};                    
                });
                state.feedLoading = false;
                state.feedError = false;
        } )
            .addCase(fetchFeed.rejected, (state) => {
                state.feedLoading = false;
                state.feedError = true;
        } )
    }
})


export default feedSlice.reducer;
export const selectFeed = state => state.feed.feed;
export const currentFeed = state => state.feed.currentFeed;
export const selectFeedLoading = state => state.feed.feedLoading;
export const {currentFeedChange} = feedSlice.actions;