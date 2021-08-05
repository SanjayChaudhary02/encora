import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginAsync = createAsyncThunk(
	'todos/loginAsync',
	async (payload) => {
		const resp = await fetch('http://localhost:7000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: payload.username, password:payload.password}),
		});

		if (resp.ok) {
			const user = await resp.json();
			return { user };
		}else if(resp.status==401){
            throw new Error("UnAuthorized !");
        }else{
            throw new Error("Server not available!");
        }
	}
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        hasError: false
    },
    reducers:{
        login: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
		[loginAsync.fulfilled]: (state, action) => {
			state.user = action.payload.user;
            state.hasError = false;
		},
        [loginAsync.rejected]: (state, err) => {
			state.hasError = {
                msg : err.error.message
            };
		}
    }
});

export const {login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.hasError;

export default userSlice.reducer;