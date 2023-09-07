import { useEffect, useState } from "react";
import PageContent from "../components/PageContent";
import ProjectDetail from "../components/ProjectDetail";
import SspePost from "../md_pages/Sspe.md";
import DtcPost from "../md_pages/Dtc.md";
import FlexsolverPost from "../md_pages/Flexsolver.md";
import ReactPost from "../md_pages/React.md";
import XfersPost from "../md_pages/Xfers.md";
import ZendeskPost from "../md_pages/Zendesk.md";

const map = {
	sspe: { title: "Serverless Streaming Processing Engine", post: SspePost },
	react: { title: "My React Journey", post: ReactPost },
	zendesk: { title: "Zendesk", post: ZendeskPost },
	flexsolver: { title: "Flexsolver", post: FlexsolverPost },
	xfers: { title: "NUS FinTech Society and Xfers", post: XfersPost },
	dtc: { title: "Digital Treasure Center", post: DtcPost },
};

function ProjectDetailPage(props) {
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch(map[props.name].post)
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	});
	return (
		<PageContent title={"project details"}>
			<ProjectDetail
				title={map[props.name].title}
				md={markdown}
			></ProjectDetail>
		</PageContent>
	);
}

export default ProjectDetailPage;
