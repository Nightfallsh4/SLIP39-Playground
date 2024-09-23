import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface SharesSelectorInput {
	numOfShares: number
	setNumOfShares: Dispatch<SetStateAction<number>>
}

export default function SharesSelector({
	numOfShares,
	setNumOfShares,
}: SharesSelectorInput) {
	const handleChange = (event: SelectChangeEvent) => {
		setNumOfShares(parseInt(event.target.value))
	}
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Shares</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={numOfShares.toString()}
				sx={{ minWidth: "6rem" }}
				label="Shares"
				onChange={handleChange}
			>
				<MenuItem value={1}>1</MenuItem>
				<MenuItem value={2}>2</MenuItem>
				<MenuItem value={3}>3</MenuItem>
				<MenuItem value={4}>4</MenuItem>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={6}>6</MenuItem>
				<MenuItem value={7}>7</MenuItem>
				<MenuItem value={8}>8</MenuItem>
				<MenuItem value={9}>9</MenuItem>
				<MenuItem value={10}>10</MenuItem>
			</Select>
		</FormControl>
	)
}
