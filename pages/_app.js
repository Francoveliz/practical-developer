import "../styles/globals.css";
import { Container, ChakraProvider } from "@chakra-ui/react";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
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
