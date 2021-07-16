import "../styles/globals.css";
import { Container, ChakraProvider } from "@chakra-ui/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import initFirebase from "../firebase/initFirebase";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		initFirebase();
	}, []);
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Container maxW="container.xl">
					<Component {...pageProps} />
				</Container>
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;
