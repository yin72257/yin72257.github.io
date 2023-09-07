import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "./UI/Typography";
import Markdown from "./UI/Markdown";

const item = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	px: 4,
};

const ProjectDetail = (props) => {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<Container
				sx={{ mt: 5, mb: 30, display: "flex", position: "relative" }}
			>
				<Box sx={item}>
					<Typography variant="h4" sx={{ my: 5 }}>
						{props.title}
					</Typography>
					<Markdown className="markdown">{props.md}</Markdown>
				</Box>
			</Container>
		</Box>
	);
};

export default ProjectDetail;
