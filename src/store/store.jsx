
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import connectionReducer from "./slices/connectionSlice";
import requestReducer from "./slices/requestsSlice";
import feedReducer from "./slices/feedSlice";



const store = configureStore({
    reducer: {
        user: userReducer,
        connections: connectionReducer,
        requests: requestReducer,
        feed: feedReducer,

    },
});

export default store;