import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        setFeed: (state, action) => {
            return action.payload;
        },
        removeFeedItem: (state, action) => {
            if (state) {
                return state.filter(item => item.id !== action.payload.id);
            }
            return state;
        },
        clearFeed: () => {
            return null;
        }
    }
})

export const { setFeed, clearFeed, removeFeedItem } = feedSlice.actions;
export default feedSlice.reducer;