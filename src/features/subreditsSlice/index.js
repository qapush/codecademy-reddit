import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSubreddits = createAsyncThunk(
    'subreddits/get',
    async () => {
        const data = await fetch('https://www.reddit.com/subreddits.json');
        const res = await data.json();
        return res;
    }
)

const subreditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        subredditsLoading: false,
        subredditsError: false
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSubreddits.pending, (state, action) => {
                state.subredditsLoading = true;
                state.subredditsError = false;
        } )
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.subreddits = action.payload.data.children.map(el => {
                    console.log(el.data)
                    const { display_name_prefixed, id, icon_img } = el.data;
                    return [display_name_prefixed, id, icon_img];
                });
                state.subredditsLoading = false;
                state.subredditsError = false;
        } )
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.subredditsLoading = false;
                state.subredditsError = true;
        } )
    }
})

export default subreditsSlice.reducer;