import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Box from "@mui/material/Box";
import ComputerIcon from '@mui/icons-material/Computer';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Typography from "./UI/Typography";

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    June 2023 - August 2023
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <Box
                            component="img"
                            src="/logo192.png"
                            alt="react"
                            sx={{ height: 25 }}
                        />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        React
                    </Typography>
                    <Typography>Self taught React project</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                >
                    April 2023 - Current
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <Box
                            component="img"
                            src="/images/projecticons/kubernetes.png"
                            alt="k8s"
                            sx={{ height: 25 }}
                        />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        Serverless Stream Processing
                    </Typography>
                    <Typography>
                        Research + Engineering project on advanced Kubernetes
                        and FaaS
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    May - November 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <Box
                            component="img"
                            src="/images/projecticons/zendesk.png"
                            alt="zendesk"
                            sx={{ width: 25, paddingY: 0.5 }}
                        />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        Zendesk
                    </Typography>
                    <Typography>
                        6 month internship working as a full-time software
                        engineer
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                >
                    May 2021 - August 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot color="primary">
                        <ComputerIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        FlexSolver
                    </Typography>
                    <Typography>
                        Full-time backend engineer intern for 3 months on a F&B
                        project
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    March 2021 - May 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <Box
                            component="img"
                            src="/images/projecticons/x.png"
                            alt="xfers"
                            sx={{ height: 25 }}
                        />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        Xfers & NUS FinTech Society
                    </Typography>
                    <Typography>
                        Led a team of students to develop a blockchain risk
                        analyzing website
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                >
                    December 2020 - January 2021
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    <TimelineDot color="secondary">
                        <CurrencyBitcoinIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                        Digital Treasure Centre
                    </Typography>
                    <Typography>
                        Worked as a full-time intern on Blockchain R&D
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
