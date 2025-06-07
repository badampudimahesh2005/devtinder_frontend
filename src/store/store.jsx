
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import connectionReducer from "./slices/connectionSlice";
import requestReducer from "./slices/requestsSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        connections: connectionReducer,
        requests: requestReducer,
    },
});

export default store;