import PageContent from "../components/PageContent";

function ProjectsPage(props) {
	return (
		<PageContent title={"project details"}>
			<h1>{props.name}</h1>
		</PageContent>
	);
}

export default ProjectsPage;
