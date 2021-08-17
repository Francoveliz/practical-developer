import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Card = ({ title, id }) => {
	return (
		<Box>
			<h1>{title}</h1>
			<Link href={`/challenges/${id}`}>
				<Button colorScheme="blue">details</Button>
			</Link>
		</Box>
	);
};

export default Card;
