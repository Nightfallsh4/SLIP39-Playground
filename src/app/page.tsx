"use client"
import Navbar from "@/components/Navbar/Navbar"
import SecretInput from "@/components/SecretInput/SecretInput"
import SubmitButton from "@/components/SubmitButton.tsx/SubmitButton"
import { Box, Container, Divider, Paper, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useState } from "react"

export default function Home() {
	const [input, setInput] = useState<string>("")
	const [shares, setShares] = useState<string[]>([])
	const [isError, setIsError] = useState<boolean>(false)
	return (
		<Container>
			<Grid container={true} spacing={3}>
				<Grid size={12}>
					<Navbar />
				</Grid>
				<Grid size={6}>
					<Box marginY="1rem">
						<Typography variant="h5">Create SLIP 39 Backups</Typography>
					</Box>
				</Grid>
				{/* <Grid size={6}>
					<Container>
						<Typography variant="h5">Recover SSS</Typography>
					</Container>
				</Grid> */}
				<Grid size={12}>
					<Box>
						<SecretInput
							input={input}
							setInput={setInput}
							isError={isError}
							setIsError={setIsError}
						/>
					</Box>
				</Grid>
				<Grid size={2}>
					<Box>
						<SubmitButton
							input={input}
							setShares={setShares}
							isError={isError}
						/>
					</Box>
				</Grid>
				<Grid size={10}>
					<Box marginY="0.5rem">
						<Typography variant="body1">
							Create a 2 out of 4 SLIP39 backup of your secret
						</Typography>
					</Box>
				</Grid>
				<Grid size={12}>
					<Divider />
				</Grid>
				{shares.map((value, index) => (
					<Grid size={4} key={index}>
						<Paper sx={{ padding: "2rem" }}>
							<Box sx={{ marginBottom: "1rem" }}>Share {index + 1}</Box>
							<Divider sx={{ marginBottom: "1rem" }} />
							{value}
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}
