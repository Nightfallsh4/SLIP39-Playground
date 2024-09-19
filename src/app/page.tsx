import Navbar from "@/components/Navbar/Navbar"
import SecretInput from "@/components/SecretInput/SecretInput"
import { Box, Button } from "@mui/material"
import Grid from "@mui/material/Grid2"

export default function Home() {
	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				<Navbar />
			</Grid>
			<Grid size={12}>
				<Grid container spacing={2}>
					<Grid size={4}>
						<Box>
							<SecretInput />
						</Box>
					</Grid>
					<Grid size={8} sx={{}}>
						<Box>
							<Button variant="contained" color="primary">
								Create SSS
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
