import "./App.css";
import {
	createBrowserRouter,
	// createRoutesFromElements,
	RouterProvider,
	// Route,
} from "react-router-dom";
import RootLayout from "./pages/Root";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <AboutPage /> },
			{ path: "contact", element: <ContactPage /> },
			{ path: "projects", element: <ProjectsPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
