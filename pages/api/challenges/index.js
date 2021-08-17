import firebase from "../../../firebase/initFirebase";

const challenges = async (req, res) => {
	const db = firebase.firestore();

	try {
		if (req.method === "GET") {
			const snapshot = await db.collection("challenges").get();
			const data = await snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
			res.status(200).json(data);
		}
		res.status(200).end();
	} catch (e) {
		res.status(400).end();
	}
};

export default challenges;
