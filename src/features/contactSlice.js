import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    'kdjfkaj' : {
        id : 'kdjfkaj',
        username : 'sanju',
        image : '',
        lastMessage : {
            type : 'text',
            time : '12/01/24',
            message : 'lqjeoihr  kfhpehw oe;e fq;wepiw euifh'
        },
        unreadMessage : 10
    },
    'kjdfksj' : {
        id : 'kjdfksj',
        username : 'rahul',
        image : '',
        lastMessage : {
            type : 'text',
            time : '12/01/24',
            message : 'lqjeoihr  kfhpehw oe;e fq;wepiw euifh'
        },
        unreadMessage : 1
    },
    'dkjf' : {
        id : 'dkjf;dks',
        username : 'kripanshu',
        image : '',
        lastMessage : {
            type : 'text',
            time : '12/01/24',
            message : 'lqjeoihr  kfhpehw oe;e fq;wepiw euifh'
        },
        unreadMessage : 2
    },

}

const contactSlice = createSlice({
    name : 'contact',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{

    }
});

export default contactSlice.reducer;
export const {

} = contactSlice.actions;