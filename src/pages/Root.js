import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveAppBar from "../components/UI/ResponsiveAppBar";

const theme = createTheme({
	palette: {
		primary: {
			main: "#311b92",
		},
		secondary: {
			main: "#ce93d8",
		},
	},
});

function RootLayout() {
	// const navigation = useNavigation();

	return (
		<ThemeProvider theme={theme}>
			<ResponsiveAppBar />
			<Box>
				<main>
					<Outlet />
				</main>
			</Box>
		</ThemeProvider>
	);
}

export default RootLayout;
