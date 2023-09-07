import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "./UI/Typography";
import CustomizedTimeline from "./CustomizedTimeline";

const ProjectsList = () => {
	return (
		<>
			<Box
				component="section"
				sx={{
					display: "flex",
					overflow: "hidden",
					bgcolor: "secondary.light",
				}}
			>
				<Container
					sx={{
						mt: 15,
						mb: 30,
						display: "grid",
						position: "relative",
					}}
				>
					<Typography variant="h4" sx={{ my: 5 }}>
						These are my experiences and projects throughout
						the years
					</Typography>
					<Typography variant="h5">
						Over the years, I had many work experiences and projects
						that made me a better programmer and expanded my
						technical knowledge. Here are some of the highlights.
						Click on each icon to learn more.
					</Typography>
				</Container>
			</Box>
			<Container
				component="section"
				sx={{
					mt: 10,
					mb: 10,
					display: "flex",
					backgroundColor: "white",
				}}
			>
				<CustomizedTimeline />
			</Container>
		</>
	);
};

export default ProjectsList;
