import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPosts } from "./postsApi";

// 1️⃣ Define a Post type (adjust according to your API)
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// 2️⃣ Define your slice state type
export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
}

// 3️⃣ Initial state typed with PostsState
const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
    errorMessage: null,
};

// 4️⃣ Async thunk with return type <Post[]>
export const fetchPosts = createAsyncThunk<Post[]>(
    "posts/fetchPosts",
    async () => {
        const posts = await getPosts();
        return posts;
    }
);

// 5️⃣ Slice with proper typing of state + actions
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
