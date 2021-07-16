import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginWithGitHub } from "../../firebase/initFirebase";

const initialState = {
	isSuccess: false,
	isError: false,
	isLoading: false,
	errorMessage: "",
	user: {},
	token: null,
};

export const login = createAsyncThunk("auth/login", async () => {
	try {
		const response = await loginWithGitHub();
		return response;
	} catch (error) {
		console.log(error);
	}
});

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: {
		[login.pending]: state => {
			state.isLoading = true;
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.isError = true;
			console.log("rejected : ", payload);
		},
		[login.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.isSuccess = true;
			state.user = payload.additionalUserInfo.profile;
			state.token = payload.credential.accessToken;
			console.log("success: ", { payload });
		},
	},
});

export default authSlice.reducer;
