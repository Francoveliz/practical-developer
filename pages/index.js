import { useUser } from "../firebase/useUser";

export default function Home() {
	const { user, logout } = useUser();
	console.log(user);
	if (user) {
		return (
			<div>
				<p>{user.displayName ? user.displayName : user.email}</p>
				<button onClick={() => logout()}>Log out!</button>
			</div>
		);
	}
	return <h1>loading...</h1>;
}
