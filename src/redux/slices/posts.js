import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fatchPosts = createAsyncThunk('posts/fatchPosts', async () => {
const { data} = await axios.get('/posts');
return data;
})

export const fatchTags = createAsyncThunk('posts/fatchTags', async () => {
    const { data} = await axios.get('/tags');
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
            state.posts.items = [];
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
        [fatchTags.pending]: (state) => {
            state.tags.items = [];
            state.tags.state = 'loading'
        },
        [fatchTags.fulfilled]: (state, action) => {
            state.tags.items = action.payload;
            state.tags.status = 'loaded';
        },
        [fatchTags.rejected]: (state) => {
            state.tags.items = [];
            state.tags.status = 'error';
        },
    }
})

export const postsReducer = postsSlice.reducer
