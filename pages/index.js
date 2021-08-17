import Counter from "../components/Counter";
import firebase from "../firebase/initFirebase";

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<button onClick={test}>test async</button>
		</>
	);
}
