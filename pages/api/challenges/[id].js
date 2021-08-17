import firebase from "../../../firebase/initFirebase";

const id = async (req, res) => {
	const db = firebase.firestore();
	const { id } = req.query;

	try {
		if (req.method === "PUT") {
			await db
				.collection("challenges")
				.doc(id)
				.update({
					...req.body,
					updated: new Date().toISOString(),
				});
		} else if (req.method === "GET") {
			const doc = await db.collection("challenges").doc(id).get();
			if (!doc.exists) {
				res.status(404).end();
			} else {
				res.status(200).json(doc.data());
			}
		} else if (req.method === "DELETE") {
			await db.collection("challenges").doc(id).delete();
		}
		res.status(200).end();
	} catch (e) {
		res.status(400).end();
	}
};

export default id;
