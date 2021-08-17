import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { SimpleGrid } from "@chakra-ui/layout";

const Challenges = () => {
	const [challenges, setChallenges] = useState([]);

	const fetchChallenges = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/api/challenges`);
			const data = await res.data;
			setChallenges(() => data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchChallenges();
	}, []);

	return (
		<>
			<SimpleGrid columns={4} spacing={6}>
				{challenges.map(challenge => (
					<Card key={challenge.id} {...challenge} />
				))}
			</SimpleGrid>
		</>
	);
};

export default Challenges;

// export async function getStaticProps(context) {
// 	const res = await axios.get("http://localhost:3000/api/challenges");
// 	const challenges = res.data;
// 	return {
// 		props: { challenges }, // will be passed to the page component as props
// 	};
// }
