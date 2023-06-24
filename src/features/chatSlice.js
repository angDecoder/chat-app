import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

/*
    message status -> sent,received,seen
*/

const initialState = {
    chatById : {
        "rahul" : {
            id : "rahul",
            name : 'rahul',
            totalMessages : 200,
            receivedMessages : 10,
            messagesByDate : {
                "24/06/23"  : {
                    "kjdkfj" : {
                        id : "kjdkfj",
                        sender : 'rahul',
                        time : Date.now(),
                        message : 'first message : akdjf;akje;j rvqjehlrkjhwe;v h',
                        status : 'received'
                    },
                    "kajdkfj" : {
                        id : "kajdkfj",
                        sender : 'Angshu',
                        time : Date.now(),
                        message : 'second message : dfkja;ehfhfg leflwqh ef hdb fljf qlqbd lqbl ljbfl jbqleblq lkjbef jb',
                        status : 'sent'
                    }
                },
                "25/06/23"  : {
                    "kjdkfj" : {
                        id : "kjdkfj",
                        sender : 'rahul',
                        time : Date.now(),
                        message : 'first message : akdjf;akje;j rvqjehlrkjhwe;v h',
                        status : 'seen'
                    },
                    "kajdkfj" : {
                        id : "kajdkfj",
                        sender : 'Angshu',
                        time : Date.now(),
                        message : 'second message : dfkja;ehfhfg leflwqh ef hdb fljf qlqbd lqbl ljbfl jbqleblq lkjbef jb',
                        status : 'seen'
                    },
                    "hello" : {
                        id : "kajdkfj",
                        sender : 'Angshu',
                        time : Date.now(),
                        message : 'second message : dfkja;ehfhfg leflwqh ef hdb fljf qlqbd lqbl ljbfl jbqleblq lkjbef jb',
                        status : 'received'
                    },
                    "world" : {
                        id : "kajdkfj",
                        sender : 'Angshu',
                        time : Date.now(),
                        message : 'second message : dfkja;ehfhfg leflwqh ef hdb fljf qlqbd lqbl ljbfl jbqleblq lkjbef jb',
                        status : 'sent'
                    },
                },

            
            }
        }
    }
}

const chatSlice = createSlice({
    name : 'chat',
    initialState,
    reducers : {

    },
    extraReducers : (builder)=>{
    }
});

export default chatSlice.reducer;
export const {

} = chatSlice.actions;