import { Button, Container } from "@mui/material";
import Typography from "./UI/Typography";
import { Link } from "react-router-dom";

function AboutSummary() {
    return (
        <Container
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 9,
            }}
        >
            <Button
                component={Link}
                to="/contact"
                sx={{
                    border: "4px solid currentColor",
                    borderRadius: 0,
                    height: "auto",
                    py: 2,
                    px: 5,
                }}
            >
                <Typography variant="h4" component="span">
                    Want to Chat? Click me!
                </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                I'm currently engrossed in a project on serverless tech and
                streaming processors alongside some brilliant minds at NUS. If
                you want to learn more about me, check out my projects page.
                Otherwise, let's connect!
            </Typography>
        </Container>
    );
}

export default AboutSummary;
