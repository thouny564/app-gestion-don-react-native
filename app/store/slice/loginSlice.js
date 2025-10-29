import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'loginInfo',
    initialState: {
        email : "",
        password : ""
    },
    reducers : {

        setLogin : (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            console.log(action.payload.email);
            console.log(action.payload.password);
        },

        removelogin : (state, action) => {
            state.email = "";
            state.password = ""
        }
    }
})


export const {removelogin, setLogin} = loginSlice.actions;
export default loginSlice.reducer;