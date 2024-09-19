import { TextField } from "@mui/material"

export default function SecretInput() {
	return (
		<TextField
			id="outlined-multiline-static"
			label="Enter Secret"
			multiline
			rows={4}
            sx={{color:"whitesmoke"}}
            

			defaultValue=""
		/>
	)
}
