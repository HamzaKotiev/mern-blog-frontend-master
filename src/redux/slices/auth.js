import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fatchUserData = createAsyncThunk('/auth/fatchUserData', async (params) => {
    const { data} = await axios.get('/auth/login',params);
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
        [fatchUserData.pending]: (state) => {
            state.status = 'loading';
            state.data = null;
        },
        [fatchUserData.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fatchUserData.rejected]: (state) => {
            state.status = 'error';
            state.data = null;
        },
    }
})

export const authReducer = authSlice.reducer;

