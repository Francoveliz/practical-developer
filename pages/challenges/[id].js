import React from "react";
import axios from "axios";

const ChallengeDetails = ({ challenge = "" }) => {
	return (
		<div>
			<h1>{challenge.title}</h1>
		</div>
	);
};

// export async function getStaticPaths() {
// 	const res = await axios.get("https://jsonplaceholder.typicode.com/users");
// 	const users = await res.json();

// 	const paths = users.map(user => ({
// 		params: { id: user.id.toString() },
// 	}));

// 	return { paths, fallback: false };
// }

export async function getStaticProps(context) {
	console.log(context);
	const challenge = await axios.get(
		`http://localhost:3000/api/challenges/${params.id}`
	);

	return {
		props: { challenge }, // will be passed to the page component as props
	};
}

export default ChallengeDetails;
