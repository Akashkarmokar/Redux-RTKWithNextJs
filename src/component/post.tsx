import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "@/features/posts/postsSlice";
import { RootState, AppDispatch } from "@/store/store";

import type { Post } from "@/features/posts/post.types";

const Post = () => {
    const { posts, isLoading, isError, errorMessage } = useSelector(
        (state: RootState) => state.posts
    );
    const postDispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        postDispatch(fetchPosts());
    }, [postDispatch]);
    let content;

    if (isLoading) {
        content = <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        content = <div>{errorMessage}</div>;
    }

    if (!isLoading && !isError && posts.length === 0) {
        content = <div>No posts found!</div>;
    }

    if (!isLoading && !isError && posts.length > 0) {
        content = posts.map((post: Post) => (
            <div key={post.id}>
                <h3> Title : {post.title}</h3>
                <p> Body : {post.body}</p>
                <br />
            </div>
        ));
    }
    return <div className="m-5">{content}</div>;
};

export default Post;
