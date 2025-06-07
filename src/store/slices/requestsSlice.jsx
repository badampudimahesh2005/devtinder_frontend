import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        setRequests: (state, action) => {
            return action.payload;
        },
       removeRequest : (state, action) => {
            if (state) {
                return state.filter(request => request.id !== action.payload.id);
            }
            return state;
        },
        clearRequests: () => {
            return null;
        }
    }
})

export const {setRequests, clearRequests, removeRequest} = requestsSlice.actions;
export default requestsSlice.reducer;