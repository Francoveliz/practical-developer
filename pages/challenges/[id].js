import React from "react";
import axios from "axios";
import firebase from "../../firebase/initFirebase";

const ChallengeDetails = ({ challenge }) => {
	return (
		<div>
			<h1>{challenge.title}</h1>
		</div>
	);
};

export async function getStaticPaths() {
	const db = firebase.firestore();
	const res = await db.collection("challenges").get();

	const challenges = res.docs.map(doc => ({
		id: doc.id,
		...doc.data(),
	}));
	// do something with documents

	console.log({ challenges });

	const paths = challenges.map(challenge => ({
		params: { id: challenge.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios.get(
		`http://localhost:3000/api/challenges/${params.id}`
	);

	const challenge = res.data;
	return {
		props: { challenge }, // will be passed to the page component as props
	};
}

export default ChallengeDetails;
