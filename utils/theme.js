import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		github: "#333",
	},
	components: {
		Container: {
			baseStyle: {
				maxWidth: "container.xl",
			},
		},
	},
});
export default theme;
