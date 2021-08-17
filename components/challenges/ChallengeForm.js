import React, { useEffect, useState } from "react";
import firebase from "../../firebase/initFirebase";
import { useFormik } from "formik";
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	VStack,
} from "@chakra-ui/react";
import Editor from "../Editor";

const ChallengeForm = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState("");

	useEffect(() => {
		setEditorLoaded(true);
	}, []);

	const addChallenge = async values => {
		const db = firebase.firestore();
		await db
			.collection("challenges")
			.doc()
			.set({ ...values });
	};

	const initialFormValues = {
		title: "",
		body: "",
	};

	const handleSubmit = values => {
		console.log(values);
		addChallenge(values);
		console.log("challenges added");
	};

	const formik = useFormik({
		initialValues: initialFormValues,
		onSubmit: values => handleSubmit(values),
	});
	const handleOnChange = text => {
		formik.setFieldValue("body", text);
	};

	return (
		<VStack spacing={5} boxShadow="lg" p={8} borderRadius="xl" bg="white">
			<FormControl>
				<FormLabel>Title</FormLabel>
				<Input
					type="text"
					id="title"
					value={formik.values.title}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</FormControl>

			<FormControl>
				<FormLabel>Body</FormLabel>
				<Editor
					value={formik.values.body}
					name="body"
					editorLoaded={editorLoaded}
					onChange={handleOnChange}
				/>
			</FormControl>

			<Button colorScheme="blue" onClick={formik.handleSubmit}>
				Submit
			</Button>
		</VStack>
	);
};

export default ChallengeForm;
