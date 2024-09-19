"use client"
import { useState } from "react"
import slip39 from "slip39"

export default function useInput() {
	const [input, setInput] = useState<string>("")

	return { input, setInput }
}
