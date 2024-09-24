"use client"
import Navbar from "@/components/Navbar/Navbar"
import SecretInput from "@/components/SecretInput/SecretInput"
import ShareInput from "@/components/ShareInput/ShareInput"
import SharesSelector from "@/components/SharesSelector/SharesSelector"
import SubmitButton from "@/components/SubmitButton.tsx/SubmitButton"
import SubmitSharesButton from "@/components/SubmitSharesButton/SubmitSharesButton"
import ThresholdSelector from "@/components/ThresholdSelector/ThresholdSelector"
import {
	Alert,
	Box,
	Container,
	Divider,
	Paper,
	Typography,
} from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useEffect, useState } from "react"

export default function Home() {
	const [input, setInput] = useState<string>("")
	const [shares, setShares] = useState<string[]>([])
	const [isError, setIsError] = useState<boolean>(false)
	const [isRecoveryError, setIsRecoveryError] = useState<boolean>(false)
	const [retrieveShares, setRetrieveShares] = useState<string[]>(["", ""])
	const [retrievedSecret, setRetrievedSecret] = useState<string>("")
	const [numOfShares, setNumOfShares] = useState<number>(2)
	const [threshold, setThreshold] = useState<number>(1)

	useEffect(() => {
		const shares = []
		for (let i = 0; i < threshold; i++) {
			shares.push("")
		}
		// console.log(shares)

		setRetrieveShares(shares)
	}, [numOfShares, threshold])
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid size={12}>
					<Navbar />
				</Grid>

				<Grid size={12}>
					<Box marginY="1rem">
						<Typography variant="h5">Create SLIP 39 Backups</Typography>
					</Box>
				</Grid>

				<Grid size={6}>
					<Box>
						<SecretInput
							input={input}
							setInput={setInput}
							isError={isError}
							setIsError={setIsError}
						/>
					</Box>
				</Grid>
				<Grid size={6}>
					<Grid container spacing={3}>
						<Grid size={6}>
							<SharesSelector
								numOfShares={numOfShares}
								setNumOfShares={setNumOfShares}
							/>
						</Grid>
						<Grid size={6}>
							<ThresholdSelector
								numOfShares={numOfShares}
								threshold={threshold}
								setThreshold={setThreshold}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid size={4}>
					<Box>
						<SubmitButton
							input={input}
							threshold={threshold}
							numOfShares={numOfShares}
							setShares={setShares}
							isError={isError}
						/>
					</Box>
				</Grid>
				<Grid size={10}>
					<Box marginY="0.5rem">
						<Typography variant="body1">
							Create a {threshold} out of {numOfShares} SLIP39 backup of your
							secret
						</Typography>
					</Box>
				</Grid>
				<Grid size={12}>
					<Divider />
				</Grid>
				{shares.map((value, index) => (
					<Grid size={{ xs: 6, md: 4 }} key={index}>
						<Paper sx={{ padding: "2rem" }}>
							<Box sx={{ marginBottom: "1rem" }}>Share {index + 1}</Box>
							<Divider sx={{ marginBottom: "1rem" }} />
							{value}
						</Paper>
					</Grid>
				))}

				<Grid container>
					<Grid size={12} sx={{ marginY: "1rem" }}>
						<Divider />
					</Grid>
					<Grid size={12}>
						<Box marginY="1rem">
							<Typography variant="h5">Recover from SLIP 39 Backups</Typography>
						</Box>
					</Grid>
					<Grid size={12}>
						<Grid container spacing={3}>
							<Grid size={6}>
								<SharesSelector
									numOfShares={numOfShares}
									setNumOfShares={setNumOfShares}
								/>
							</Grid>
							<Grid size={6}>
								<ThresholdSelector
									numOfShares={numOfShares}
									threshold={threshold}
									setThreshold={setThreshold}
								/>
							</Grid>
						</Grid>
					</Grid>
					{[...Array(threshold)].map((value, index) => (
						<Grid size={6} key={index}>
							<ShareInput
								shareNum={index + 1}
								retrieveShares={retrieveShares}
								isRecoveryError={isRecoveryError}
								setRetrieveShares={setRetrieveShares}
								setIsRecoveryError={setIsRecoveryError}
							/>
						</Grid>
					))}

					{/* <Grid size={6}>
						<ShareInput
							shareNum={2}
							retrieveShares={retrieveShares}
							isRecoveryError={isRecoveryError}
							setRetrieveShares={setRetrieveShares}
							setIsRecoveryError={setIsRecoveryError}
						/>
					</Grid> */}
					<Grid size={12}>
						<SubmitSharesButton
							retrieveShares={retrieveShares}
							setRetrievedSecret={setRetrievedSecret}
							setIsRecoveryError={setIsRecoveryError}
						/>
					</Grid>
					<Grid size={8}>
						{isRecoveryError ? (
							<Alert variant="filled" severity="error">
								There is some error in the shares given. Please recheck it
							</Alert>
						) : null}
					</Grid>
					<Grid size={12} sx={{ marginY: "1rem" }}>
						<Divider />
					</Grid>
					{retrievedSecret ? (
						<Paper sx={{ padding: "2rem", minWidth: "10rem" }}>
							<Box sx={{ marginBottom: "1rem" }}>Recovered Secret</Box>
							<Divider sx={{ marginBottom: "1rem" }} />
							{retrievedSecret}
						</Paper>
					) : null}
				</Grid>
			</Grid>
		</Container>
	)
}
