"use client"
import { TextField } from "@mui/material"
import useInput from "../hooks/useInput"
import { Dispatch, SetStateAction, useState } from "react"

interface SecretInputInterface {
	input: string
	setInput: Dispatch<SetStateAction<string>>
    isError: boolean
    setIsError: Dispatch<SetStateAction<boolean>>
}

export default function SecretInput({ input, setInput, isError, setIsError }: SecretInputInterface) {
	// const { input, setInput } = useInput()
	
	return (
		<TextField
			id="outlined-multiline-static"
			label="Enter Secret"
			multiline
			rows={4}
			sx={{ color: "whitesmoke", minWidth:"30rem" }}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				console.log("Setting input")
				const input = event.target.value
				console.log(input)

				setInput(input)
				if (isError && input.length >= 16) {
					setIsError(false)
				} else if ((!isError && input.length >= 1 && input.length < 16) || input.length % 2 != 0) {
					setIsError(true)
				}
			}}
			error={isError}
			defaultValue={input}
		/>
	)
}
