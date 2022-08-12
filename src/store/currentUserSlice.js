import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        token: '',
        user: {
            id: null,
            firstName: '',
            secondName: '',
            email: '',
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;

            state.user.id = action.payload.user.id;
            state.user.firstName = action.payload.user.firstName;
            state.user.secondName = action.payload.user.secondName;
            state.user.email = action.payload.user.email;
        },
        logout: (state) => {
            state.token = '';

            state.user.id = null;
            state.user.firstName = '';
            state.user.secondName = '';
            state.user.email = '';
        },
    },
})

export const { setUser, logout } = currentUserSlice.actions

export default currentUserSlice.reducer