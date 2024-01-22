import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/get',
    async (feed) => {
        const data = await fetch(`https://www.reddit.com/${feed.toLowerCase()}.json`, {mode: "no-cors"} );
        const res = await data.json();
        return res;
    }
)

export const search = createAsyncThunk(
    'feed/search',
    async (query) => {
        const data = await fetch(`https://www.reddit.com/search/.json?q=${query}`);
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
            // Fetch feed
            .addCase(fetchFeed.pending, (state) => {
                state.feedLoading = true;
                state.feedError = false;
        } )
            .addCase(fetchFeed.fulfilled, (state, action) => {
                state.feed = action.payload.data.children.map(el => {
                        const { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media, num_comments } = el.data;
                        return { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media, num_comments};                    
                });
                state.feedLoading = false;
                state.feedError = false;
        } )
            .addCase(fetchFeed.rejected, (state) => {
                state.feedLoading = false;
                state.feedError = true;
        } )
        // Search 
        .addCase(search.pending, (state) => {
            state.feedLoading = true;
            state.feedError = false;
    } )
        .addCase(search.fulfilled, (state, action) => {
            state.feed = action.payload.data.children.map(el => {
                    const { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media, num_comments } = el.data;
                    return { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media, num_comments};                    
            });
            state.feedLoading = false;
            state.feedError = false;
    } )
        .addCase(search.rejected, (state) => {
            state.feedLoading = false;
            state.feedError = true;
    } )
    }
})


export default feedSlice.reducer;
export const selectFeed = state => state.feed.feed;
export const selectCurrentFeed = state => state.feed.currentFeed;
export const selectFeedLoading = state => state.feed.feedLoading;
export const selectFeedError = state => state.feed.feedError;
export const {currentFeedChange} = feedSlice.actions;