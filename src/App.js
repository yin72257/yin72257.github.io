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
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <AboutPage /> },
			{ path: "contact", element: <ContactPage /> },
			{ path: "projects", children:[
				{ index: true, element: <ProjectsPage />},
				{ path: "react", element: <ProjectDetail name="react"/> },
				{ path: "sspe", element: <ProjectDetail name="sspe"/> },
				{ path: "zendesk", element: <ProjectDetail name="zendesk"/> },
				{ path: "flexsolver", element: <ProjectDetail name="flexsolver"/> },
				{ path: "xfers", element: <ProjectDetail name="xfers"/> },
				{ path: "dtc", element: <ProjectDetail name="dtc"/> },
			] },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
