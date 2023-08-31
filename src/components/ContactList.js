import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "./UI/Typography";
import { Link } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

const ImageToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#ffffff",
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

function ContactList() {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                overflow: "hidden",
                bgcolor: "#ffffff",
            }}
        >
            <Container
                sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
            >
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box sx={item}>
                            <Tooltip title="My Profile">
                                <Link to="https://www.linkedin.com/in/ruohang-yin-5698621b4/">
                                    <Box
                                        component="img"
                                        src="/images/contactlogos/linkedin.png"
                                        alt="linkedin"
                                        sx={{ height: 100 }}
                                    />
                                </Link>
                            </Tooltip>
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Linkedin
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={item}>
                            <Tooltip title="My Profile">
                                <Link to="https://github.com/yin72257">
                                    <Box
                                        component="img"
                                        src="/images/contactlogos/github.png"
                                        alt="github"
                                        sx={{ height: 100 }}
                                    />
                                </Link>
                            </Tooltip>
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Github
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="/images/contactlogos/gmail.png"
                                alt="mail"
                                sx={{ height: 100 }}
                            />
                            <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
                                Email
                            </Typography>
                            <Typography variant="h5">
                                <Link
                                    to="mailto:ruohangyin@gmail.com"
                                    style={{ textDecoration: "none" }}
                                >
                                    ruohangyin@gmail.com
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <ImageToolTip
                                placement="top"
                                title={
                                    <Box
                                        component="img"
                                        sx={{ height: 300 }}
                                        alt="wechat qr"
                                        src="/images/wechatqr.png"
                                    />
                                }
                            >
                                <Box
                                    component="img"
                                    src="/images/contactlogos/wechat.png"
                                    alt="wechat"
                                    sx={{ height: 100 }}
                                />
                            </ImageToolTip>
                            <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
                                WeChat
                            </Typography>
                            <Typography variant="h5">yruohang</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box
                                component="img"
                                src="/images/contactlogos/whatsapp.png"
                                alt="phone"
                                sx={{ height: 100 }}
                            />
                            <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
                                Phone Number
                            </Typography>
                            <Typography variant="h5">+65 90252936</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ContactList;
