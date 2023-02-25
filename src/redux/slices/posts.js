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
})

export const postsReducer = postsSlice.reducer
