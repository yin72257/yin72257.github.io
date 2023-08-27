import About from "../components/About";
import AboutMe from "../components/AboutMe";
import PageContent from "../components/PageContent";

function AboutPage() {
	return (
		<PageContent title="Welcome!">
			<About />
			<AboutMe />
			<About />
		</PageContent>
	);
}

export default AboutPage;
