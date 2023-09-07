import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "./UI/Typography";
import CustomizedTimeline from "./CustomizedTimeline";

const ProjectsList = () => {
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
                sx={{ mt: 15, mb: 30, display: "grid", position: "relative" }}
            >
                <Typography variant="h5">
                    Over the years, I had many work experiences and projects
                    that made me a better programmer and expanded my technical
                    knowledge. Here are some of the highlights. Click on each
                    icon to learn more.
                </Typography>
                <Box sx={{ mt: 5 }}>
                    <CustomizedTimeline />
                </Box>
            </Container>
        </Box>
    );
};

export default ProjectsList;
