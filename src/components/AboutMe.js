import { Box, Container, Grid } from "@mui/material";
import Typography from "./UI/Typography";
const AboutMe = () => {
	return (
		<Container
			component="section"
			sx={{ mt: 10, display: "flex", backgroundColor: "white", mb: 10, textAlign: "center" }}
		>
			<Grid container>
				<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "primary.main",
							py: 8,
							px: 3,
						}}
					>
						<Box component="form" sx={{ maxWidth: 400 }}>
							<Typography variant="h5" color="white">
                Outside the world of code, I'm jamming on my saxophone with the Jazz Band or shooting hoops at the local court. I'm a proud member of the NUS FinTech Society and have a soft spot for volunteering, especially when it involves volunteering at the Apex Harmony Lodge or assisting at the Willing Hearts organization.
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: { md: "block", xs: "none" },
						position: "relative",
					}}
				>
					
					<Box
						component="img"
						src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750"
						alt="call to action"
						sx={{
							position: "absolute",
							top: -28,
							left: -28,
							right: 0,
							bottom: 0,
							width: "100%",
							maxWidth: 600,
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AboutMe;
