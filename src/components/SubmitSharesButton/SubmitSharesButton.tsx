"use client"
import { Box, Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
// @ts-expect-error SLIP39 import works
import slip39 from "slip39"

interface SubmitSharesInterface {
	retrieveShares: string[]
	setRetrievedSecret: Dispatch<SetStateAction<string>>
    setIsRecoveryError: Dispatch<SetStateAction<boolean>>
}
export default function SubmitSharesButton({
	retrieveShares,
	setRetrievedSecret,
    setIsRecoveryError
}: SubmitSharesInterface) {
	function onSubmitShares() {
		console.log("Starting Recovery")

		try {
			const recoveredSecret = slip39.recoverSecret(retrieveShares, "")
			console.log("Recovery Secret- ")
			console.log(recoveredSecret)

			console.log("Recovered Secret: " + recoveredSecret.slip39DecodeHex())
			setRetrievedSecret(recoveredSecret.slip39DecodeHex())
		} catch (error) {
			console.error(error)
            setIsRecoveryError(true)
		}
	}
	return (
		<Box>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					onSubmitShares()
				}}
			>
				Retrieve Secret
			</Button>
		</Box>
	)
}
