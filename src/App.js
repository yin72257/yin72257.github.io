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
import ProjectDetailPage from "./pages/ProjectDetail";

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
				{ path: "react", element: <ProjectDetailPage name="react"/> },
				{ path: "sspe", element: <ProjectDetailPage name="sspe"/> },
				{ path: "zendesk", element: <ProjectDetailPage name="zendesk"/> },
				{ path: "flexsolver", element: <ProjectDetailPage name="flexsolver"/> },
				{ path: "xfers", element: <ProjectDetailPage name="xfers"/> },
				{ path: "dtc", element: <ProjectDetailPage name="dtc"/> },
			] },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
