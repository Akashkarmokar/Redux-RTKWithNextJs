export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface FetchpostParams {
    id: number;
    name: string;
}

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string | null;
}
