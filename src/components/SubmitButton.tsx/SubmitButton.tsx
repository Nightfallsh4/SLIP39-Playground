"use client"
import { Box, Button } from "@mui/material"
import useInputContext from "../Context/useInputContext"
import slip39 from "slip39"

export default function SubmitButton() {
	// const { onSubmitSecret } = useInputContext()
	function onSubmitSecret() {
		console.log("On Clicked")

		const threshold = 2

		const passphrase = "TREZOR"
		const masterSecret = "ABCDEFGHIJKLMNOPQRST".slip39EncodeHex()
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
		const aliceShare1 = slip.fromPath("r/0").mnemonics
		console.log("Alice Share 1- ")
		console.log(aliceShare1)

		const aliceShare2 = slip.fromPath("r/1").mnemonics
		console.log("Alice share 2- ")
		console.log(aliceShare2)
	}
	return (
		<Box>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					onSubmitSecret()
				}}
			>
				Create SSS
			</Button>
		</Box>
	)
}
