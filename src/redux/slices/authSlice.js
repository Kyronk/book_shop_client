import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  loginUser = createAsyncThunk(
    "auth/loginUser",
    async (user) => {
        const response = await axios.post(` http://localhost:4000/api/v1/auth/login`, user);

        const dataUser = response.data;
        // console.log(dataUser)
        return dataUser;
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if(action.error.message === '') {
                state.error = 'access denied invalid credentials';
            }else {
                state.error = action.error.message;
            }
        })
    }
})

// const {reducer: authReducer} = authSlice;

// export default authReducer;
export default authSlice.reducer; 




