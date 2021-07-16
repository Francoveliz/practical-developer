import { useState } from "react";
import { loginWithGitHub } from "../firebase/initFirebase";
import { Button } from "@chakra-ui/button";
import { FirebaseAuth } from "../components/auth/FirebaseAuth";

const Auth = () => {
	const handleClick = async () => {
		try {
			const login = await loginWithGitHub();
			const { additionalUserInfo } = await login;

			console.log(additionalUserInfo.profile);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<FirebaseAuth />
			<Button onClick={handleClick}>login </Button>
		</div>
	);
};

export default Auth;
