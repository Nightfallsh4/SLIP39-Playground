"use client"
import { Box, Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
// @ts-expect-error SLIP39 import works
import slip39 from "slip39"

interface SubmitButtonInputInterface {
	input: string,
    setShares: Dispatch<SetStateAction<string[]>>
    isError: boolean
}

export default function SubmitButton({ input, setShares, isError }: SubmitButtonInputInterface) {
	// const { input } = useInput()
	function onSubmitSecret(input: string) {
		console.log("On Clicked")

		const threshold = 2

		const passphrase = ""
		console.log(input)

        // @ts-expect-error slip39EncodeHex works
		const masterSecret = input.slip39EncodeHex()
		/**
		 * 4 groups shares.
		 * = two for Alice
		 * = one for friends and
		 * = one for family members
		 * Two of these group shares are required to reconstruct the master secret.
		 */
		const groups = [
			// Alice group shares. 1 is enough to reconstruct a group share,
			// therefore she needs at least two group shares to be reconstructed,
			[1, 1],
			[1, 1],
			// 3 of 5 Friends' shares are required to reconstruct this group share
			[1, 1],
			// 2 of 6 Family's shares are required to reconstruct this group share
			[1, 1],
		]

		const slip = slip39.fromArray(masterSecret, {
			passphrase: passphrase,
			threshold: threshold,
			groups: groups,
		})

		console.log(slip)

		// One of Alice's share
		const share1 = slip.fromPath("r/0").mnemonics
		console.log("Share 1- ")
		console.log(share1)

		const share2 = slip.fromPath("r/1").mnemonics
		console.log("Share 2- ")
		console.log(share2)

		const share3 = slip.fromPath("r/2").mnemonics
		console.log("Share 3- ")
		console.log(share3)

		const share4 = slip.fromPath("r/3").mnemonics
		console.log("Share 4- ")
		console.log(share4)

		const shares = [share1[0], share2[0], share3[0], share4[0]]

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
