import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "./UI/Typography";

const item = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	px: 4,
};

const About = () => {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				overflow: "hidden",
				bgcolor: "secondary.light",
			}}
		>
			<Container
				sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
			>
				<Box sx={item}>
					<Typography variant="h4" sx={{ my: 5 }}>
						{"Hey there! I'm Yin Ruohang"}
					</Typography>
					<Typography variant="h5">
						{
							"I'm currently navigating the world of computer science at the National University of Singapore. "
						}
						
						{
							"With a penchant for backend development and a curiosity that never seems to wane, I've had the privilege to intern at some fantastic places like Zendesk and FlexSolver. "
						}
						
						{
							"I've dabbled in everything from Kubernetes to Blockchain, and I'm always on the lookout for the next big thing in tech."
						}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default About;
