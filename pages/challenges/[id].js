import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ChallengeDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [challenge, setChallenge] = useState({});

	const fetchChallenge = async id => {
		try {
			const res = await axios.get(
				`http://localhost:3000/api/challenges/${id}`
			);
			const data = await res.data;
			setChallenge(() => data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchChallenge(id);
	}, []);

	return (
		<div>
			<h1>{challenge.title}</h1>
		</div>
	);
};

// export async function getStaticPaths() {
// 	const db = firebase.firestore();
// 	const res = await db.collection("challenges").get();

// 	const challenges = res.docs.map(doc => ({
// 		id: doc.id,
// 		...doc.data(),
// 	}));
// 	// do something with documents

// 	console.log({ challenges });

// 	const paths = challenges.map(challenge => ({
// 		params: { id: challenge.id.toString() },
// 	}));

// 	return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
// 	const res = await axios.get(
// 		`http://localhost:3000/api/challenges/${params.id}`
// 	);

// 	const challenge = res.data;
// 	return {
// 		props: { challenge }, // will be passed to the page component as props
// 	};
// }

export default ChallengeDetails;
