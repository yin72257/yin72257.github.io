import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
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
                sx={{ mt: 15, mb: 40, display: "flex", position: "relative" }}
            >
                <Box sx={item}>
                  <p>Hi</p>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
