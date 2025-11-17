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
            //appel api envoyer info email et mdp non hashe a l'api et l'api verifie si email correspond et si mdp dans la base de donnees qui est hash correspond au mdp envoye par react native hash
        },

        removelogin : (state, action) => {
            state.email = "";
            state.password = ""
        }
    }
})


export const {removelogin, setLogin} = loginSlice.actions;
export default loginSlice.reducer;