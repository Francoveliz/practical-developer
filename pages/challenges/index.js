import React, { useEffect, useState } from "react";
import axios from "axios";

const Challenges = ({ challenges }) => {
	console.log(challenges);
	return (
		<div>
			{challenges.map(challenge => (
				<div key={challenge}>
					<h1>{challenge.title}</h1>
				</div>
			))}
		</div>
	);
};

export default Challenges;

export async function getStaticProps(context) {
	const res = await axios.get("http://localhost:3000/api/challenges");
	const challenges = res.data;
	return {
		props: { challenges }, // will be passed to the page component as props
	};
}
