import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface ThresholdSelectorInput {
	numOfShares: number
    threshold: number
	setThreshold: Dispatch<SetStateAction<number>>
}

export default function ThresholdSelector({
	numOfShares,
    threshold,
	setThreshold,
}: ThresholdSelectorInput) {
	const handleChange = (event: SelectChangeEvent) => {
		setThreshold(parseInt(event.target.value))
	}
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Threshold</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={threshold.toString()}
				sx={{ minWidth: "6rem" }}
				label="Threshold"
				onChange={handleChange}
			>
				{[...Array(numOfShares)].map((value, index) => (
					<MenuItem value={index + 1} key={index}>
						{index + 1}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}
