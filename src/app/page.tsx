"use client"
import Navbar from "@/components/Navbar/Navbar"
import SecretInput from "@/components/SecretInput/SecretInput"
import SubmitButton from "@/components/SubmitButton.tsx/SubmitButton"
import { Box } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useState } from "react"

export default function Home() {
	const [input, setInput] = useState<string>("")

	
	return (
		<Grid container spacing={2}>
			<Grid size={12}>
				<Navbar />
			</Grid>
			<Grid size={12}>
				<Grid container spacing={2}>
					<Grid size={4}>
						<Box>
							<SecretInput input={input} setInput={setInput}/>
						</Box>
					</Grid>
					<Grid size={8} sx={{}}>
						<SubmitButton input={input} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}
