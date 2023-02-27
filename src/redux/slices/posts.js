import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fatchPosts = createAsyncThunk('posts/fetchPosts', async () => {
const { data} = await axios.get('/post');
return data;
})

const initialState = {
    posts: {
        items: [],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading',
    }
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
    extraReducers: {
        [fatchPosts.pending]: (state) => {
            state.posts.state = 'loading'
        },
        [fatchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fatchPosts.rejected]: (state) => {
            state.posts.items = [];
            state.posts.status = 'error';
        },
    }
})

export const postsReducer = postsSlice.reducer
