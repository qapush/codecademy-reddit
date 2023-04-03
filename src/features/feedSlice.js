import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeed = createAsyncThunk(
    'feed/get',
    async (feed = 'best') => {
        const data = await fetch(`https://www.reddit.com/${feed}/.json`);
        const res = await data.json();
        return res;
    }
)

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [],
        feedLoading: false,
        feedError: false
    },
    extraReducers: builder => {
        builder
            .addCase(fetchFeed.pending, (state) => {
                state.feedLoading = true;
                state.feedError = false;
        } )
            .addCase(fetchFeed.fulfilled, (state, action) => {
                state.feed = action.payload.data.children.map(el => {
                    const { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media  } = el.data;
                    return { subreddit_name_prefixed, id, author, title, post_hint, url, selftext, media  };
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