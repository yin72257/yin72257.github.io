import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveAppBar from "../components/UI/ResponsiveAppBar";

const rawTheme = createTheme({
	palette: {
		primary: {
			main: "#311b92",
			light: "#5a48a7",
			dark: "#221266"
		},
		secondary: {
			main: "#ce93d8",
			light: "#f5e9f7",
			dark: "#906697"
		},
	},
	typography: {
		fontFamily: "'Work Sans', sans-serif",
		fontSize: 14,
		fontWeightLight: 300, // Work Sans
		fontWeightRegular: 400, // Work Sans
		fontWeightMedium: 700, // Roboto Condensed
	},
});

const fontHeader = {
	color: rawTheme.palette.text.primary,
	fontWeight: rawTheme.typography.fontWeightMedium,
	fontFamily: "'Roboto Condensed', sans-serif",
	textTransform: 'uppercase',
  };
  
  const theme = {
	...rawTheme,
	palette: {
	  ...rawTheme.palette,
	  background: {
		...rawTheme.palette.background,
		default: rawTheme.palette.common.white,
	  },
	},
	typography: {
	  ...rawTheme.typography,
	  fontHeader,
	  h1: {
		...rawTheme.typography.h1,
		...fontHeader,
		letterSpacing: 0,
		fontSize: 60,
	  },
	  h2: {
		...rawTheme.typography.h2,
		...fontHeader,
		fontSize: 48,
	  },
	  h3: {
		...rawTheme.typography.h3,
		...fontHeader,
		fontSize: 42,
	  },
	  h4: {
		...rawTheme.typography.h4,
		...fontHeader,
		fontSize: 36,
	  },
	  h5: {
		...rawTheme.typography.h5,
		fontSize: 20,
		fontWeight: rawTheme.typography.fontWeightLight,
	  },
	  h6: {
		...rawTheme.typography.h6,
		...fontHeader,
		fontSize: 18,
	  },
	  subtitle1: {
		...rawTheme.typography.subtitle1,
		fontSize: 18,
	  },
	  body1: {
		...rawTheme.typography.body2,
		fontWeight: rawTheme.typography.fontWeightRegular,
		fontSize: 16,
	  },
	  body2: {
		...rawTheme.typography.body1,
		fontSize: 14,
	  },
	},
  };


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
