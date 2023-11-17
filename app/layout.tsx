'use client'
import './globals.css'
import '@aws-amplify/ui-react/styles.css'

import { awsConfig } from '@/aws_config'
import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsConfig)

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Authenticator.Provider>
				<body>{children}</body>
			</Authenticator.Provider>
		</html>
	)
}
