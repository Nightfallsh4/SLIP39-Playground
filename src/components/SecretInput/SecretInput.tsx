"use client"
import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"
import { Dispatch, SetStateAction } from "react"

interface SecretInputInterface {
	input: string,
    setInput: Dispatch<SetStateAction<string>>,
}

export default function SecretInput({input, setInput}: SecretInputInterface) {
	// const { input, setInput } = useInput()
	return (
		<TextField
			id="outlined-multiline-static"
			label="Enter Secret"
			multiline
			rows={4}
			sx={{ color: "whitesmoke" }}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				console.log("Setting input")
				const input = event.target.value
				console.log(input)

				setInput(input)
			}}
			defaultValue={input}
		/>
	)
}
