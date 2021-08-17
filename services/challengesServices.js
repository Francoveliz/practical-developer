import firebase from "../firebase/initFirebase";

export const fetchChallenges = async () => {
	const snapshot = await firebase
		.firestore()
		.collection("challenges")
		.get();
	return snapshot.docs.map(doc => doc.data());
};
