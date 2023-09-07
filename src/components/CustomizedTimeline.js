import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Box from "@mui/material/Box";
import ComputerIcon from "@mui/icons-material/Computer";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Typography from "./UI/Typography";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Container } from "@mui/system";

export default function CustomizedTimeline() {
	return (
		<>
			<Timeline
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.2,
					},
				}}
			>
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
						<Link to="sspe">
							<TimelineDot color="secondary">
								<Box
									component="img"
									src="/images/projecticons/kubernetes.png"
									alt="k8s"
									sx={{ height: 25 }}
								/>
							</TimelineDot>
						</Link>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									Serverless Stream Processing Engine
								</Typography>
								<Typography>
									Currently, I am working with Professor
									Richard Ma Tianbai on developing a new
									state-of-the art cloud native Serverless
									stream processing engine that leverages
									Functions-as-a-Service to reduce operational
									costs for software firms. This project will
									last for the whole year and I am looking
									forward to the result.
								</Typography>
							</Container>
						</Box>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: "auto 0" }}
						align="left"
						variant="body2"
						color="text.secondary"
					>
						June 2023 - August 2023
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<Tooltip title="Details">
							<Link to="react">
								<TimelineDot color="primary">
									<Box
										to="react"
										component="img"
										src="/logo192.png"
										alt="react"
										sx={{ height: 25 }}
									/>
								</TimelineDot>
							</Link>
						</Tooltip>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									React
								</Typography>
								<Typography>
									Recently, I took on the ambitious challenge
									of mastering React in just two weeks. The
									outcome was a dynamic project, seamlessly
									integrating react-router for navigation and
									Material-UI for a polished interface. This
									rapid immersion not only honed my
									adaptability but also showcased my ability
									to swiftly grasp and implement complex
									frameworks, a testament to my dedication and
									aptitude in the realm of web development.
								</Typography>
							</Container>
						</Box>
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
						<Link to="zendesk">
							<TimelineDot color="primary" variant="outlined">
								<Box
									component="img"
									src="/images/projecticons/zendesk.png"
									alt="zendesk"
									sx={{ width: 25, paddingY: 0.5 }}
								/>
							</TimelineDot>
						</Link>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									Zendesk
								</Typography>
								<Typography>
									Over a six-month period, I immersed myself
									within the software engineering team at
									Zendesk. Despite my intern status, I assumed
									comprehensive responsibilities, maintaining
									existing services and aiding in the
									development of new features. The experience
									was profoundly enriching.
								</Typography>
							</Container>
						</Box>
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
						<Link to="flexsolver">
							<TimelineDot color="primary">
								<ComputerIcon />
							</TimelineDot>
						</Link>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									FlexSolver
								</Typography>
								<Typography>
									Over a span of three months, I served as a
									full-time backend engineer intern at a
									prominent software engineering firm.
									Collaborating with a Food and Beverage
									chain, I played a pivotal role in developing
									the backend for their customer-centric
									mobile app. This experience enriched my
									foundational understanding of software
									development and crystallized my grasp of a
									software engineer's responsibilities.
								</Typography>
							</Container>
						</Box>
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
						<Link to="xfers">
							<TimelineDot color="primary" variant="outlined">
								<Box
									component="img"
									src="/images/projecticons/x.png"
									alt="xfers"
									sx={{ height: 25 }}
								/>
							</TimelineDot>
						</Link>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									Xfers and NUS FinTech Society
								</Typography>
								<Typography>
									During the school semester at NUS, I
									spearheaded a seven-member team from the
									FinTech Society, partnering with Singapore's
									leading FinTech firm, Xfers. Our mission was
									to develop a risk detector for blockchain
									transactions. This experience not only honed
									my leadership abilities but also deepened my
									expertise in the realm of Blockchain.
								</Typography>
							</Container>
						</Box>
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
						<Link to="dtc">
							<TimelineDot color="secondary">
								<CurrencyBitcoinIcon />
							</TimelineDot>
						</Link>

						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Container
								sx={{
									mt: 10,
									mb: 10,
								}}
							>
								<Typography variant="h6" component="span">
									Xfers and NUS FinTech Society
								</Typography>
								<Typography>
									I had the opportunity to intern at a startup
									focused on revolutionizing overseas payment
									remittance using blockchain technology. As
									their tech intern, I delved into the core
									principles of blockchain, grasping its
									transformative potential, and played a key
									role in articulating this vision to
									prospective investors.
								</Typography>
							</Container>
						</Box>
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</>
	);
}
