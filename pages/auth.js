import { useState } from "react";

import { Button } from "@chakra-ui/button";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loginWithGitHub } from "../firebase/initFirebase";

const Auth = () => {
	const dispatch = useDispatch();

	const handleClick = async () => {
		try {
			// const login = await loginWithGitHub();
			// const { additionalUserInfo } = login;
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<Button onClick={() => dispatch(login())}>login </Button>
		</div>
	);
};

export default Auth;
