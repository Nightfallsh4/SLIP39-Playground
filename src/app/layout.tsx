import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Box } from "@mui/material"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "Slip39 Playground",
	description: "Change an arbitrary string into SLIP39 backups",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Box
					sx={{
						paddingX: {xs:"1rem", md:"10rem"},
						paddingY: "3rem",
						backgroundColor: "#ededed",
						color: "black",
					}}
				>
					{children}
				</Box>
			</body>
		</html>
	)
}
