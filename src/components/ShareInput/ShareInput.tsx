"use client"
import { TextField } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface ShareInputInterface {
	shareNum: number
	retrieveShares: string[]
	isRecoveryError: boolean
	setRetrieveShares: Dispatch<SetStateAction<string[]>>
	setIsRecoveryError: Dispatch<SetStateAction<boolean>>
}

export default function ShareInput({
	shareNum,
	retrieveShares,
	isRecoveryError,
	setRetrieveShares,
	setIsRecoveryError,
}: ShareInputInterface) {
	return (
		<TextField
			id="outlined-multiline-static"
			label={"Enter Share " + shareNum}
			multiline
			rows={4}
			sx={{ color: "whitesmoke", minWidth: { xs: "10rem", lg: "25rem" } }}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				console.log("Setting Share ", shareNum)
				const input = event.target.value
				console.log(input)
				const shares = retrieveShares
				console.log("Shares")
				console.log(shares)

				shares[shareNum - 1] = input
				console.log("Share After change- ")
				console.log(shares)

				setRetrieveShares(shares)
				if (isRecoveryError) {
					setIsRecoveryError(false)
				}
			}}
			error={isRecoveryError}
		/>
	)
}
