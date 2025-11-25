import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

import type { Post, PostsState } from "./post.types";

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
};

export const fetchPosts = createAsyncThunk<Post[]>(
    "posts/fetchPosts",
    async () => {
        const posts = await getPosts();
        return posts;
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(
                fetchPosts.fulfilled,
                (state, action: PayloadAction<Post[]>) => {
                    console.log("Fetched posts:", action.payload);
                    state.isLoading = false;
                    state.posts = action.payload;
                }
            )
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.errorMessage =
                    action.error.message || "Something went wrong";
            });
    },
});

export default postsSlice.reducer;
