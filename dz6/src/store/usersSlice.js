import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice ({
    name:"usersSlice",
    initialState:{
        users:[],
        name:""
    },
    reducers:{
        addUser(state , action) {
            state.users =[...state.users, action.payload]
            state.name = " "



        },
        handlelName(state , action) {
            state.name = action.payload

            
        },

        clearUser (state , action) {
            state.users = [ "",action.payload]
        }

       
      
    }
})


export const {
    addUser,
    handlelName,
    clearUser
}=usersSlice.actions;
export default usersSlice.reducer