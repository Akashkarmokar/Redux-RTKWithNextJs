import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counters/counterSlice";
import postsSliceReducer from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        counters: counterSliceReducer,
        posts: postsSliceReducer,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
