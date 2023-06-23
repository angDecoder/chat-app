import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const autoLoginUser = createAsyncThunk(
    'user/autologin',
    async()=>{

    }
);

const initialState = {
    username : 'Angshu',
    image : 'link',
    contacts : 8
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
        
    }
});

export default userSlice.reducer;
export const {

} = userSlice.actions;