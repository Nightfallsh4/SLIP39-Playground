"use client"
import { Box, Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
// @ts-expect-error SLIP39 import works
import slip39 from "slip39"
interface SubmitButtonInputInterface {
	input: string
	threshold: number
	numOfShares: number
	setShares: Dispatch<SetStateAction<string[]>>
	isError: boolean
}

export default function SubmitButton({
	input,
	threshold,
	numOfShares,
	setShares,
	isError,
}: SubmitButtonInputInterface) {
	// const { input } = useInput()
	function onSubmitSecret(input: string) {
		console.log("On Clicked")

		const passphrase = ""
		console.log(input)

		// @ts-expect-error slip39EncodeHex works
		const masterSecret = input.slip39EncodeHex()

		const groups = []
		const element = [1, 1]
		for (let i = 0; i < numOfShares; i++) {
			groups.push(element)
		}
		console.log(groups)

		const slip = slip39.fromArray(masterSecret, {
			passphrase: passphrase,
			threshold: threshold,
			groups: groups,
		})

		console.log(slip)

		const shares = []
		
		for (let i = 0; i < numOfShares; i++) {
			const share = slip.fromPath("r/" + i).mnemonics
			console.log("Share ", i + 1)
			console.log(share)
			shares.push(share[0])
		}

		setShares(shares)
	}
	return (
		<Box>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					onSubmitSecret(input)
				}}
				disabled={isError}
			>
				Create Backup
			</Button>
		</Box>
	)
}
