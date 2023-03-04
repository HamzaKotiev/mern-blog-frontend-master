import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fatchUserData = createAsyncThunk('/auth/fatchUserData', async () => {
    const { data} = await axios.get('/posts');
return data;
})

const initialState = {
data: null,
status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
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
    }
})

export const postsReducer = postsSlice.reducer
