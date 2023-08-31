import About from "../components/About";
import AboutMe from "../components/AboutMe";
import AboutSummary from "../components/AboutSummary";
import PageContent from "../components/PageContent";

function AboutPage() {
	return (
		<PageContent title="Welcome!">
			<About />
			<AboutMe />
			<AboutSummary />
		</PageContent>
	);
}

export default AboutPage;
