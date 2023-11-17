import {
	Button,
	Flex,
	TextAreaField,
	View,
	useTheme,
} from '@aws-amplify/ui-react'
import { useState } from 'react'

export const InputArea = ({
	onMessageSend,
	roomId,
}: {
	onMessageSend: (t: string) => {}
	roomId: string | undefined
}) => {
	const [messageText, setMessageText] = useState('')
	const { tokens } = useTheme()

	const handleFormSubmit = async (e: any) => {
		e.preventDefault()
		onMessageSend(messageText)
		setMessageText('')
	}

	return (
		<View
			style={{
				borderTop: '1px solid lightgray',
				padding: '5px',
			}}
		>
			<View>
				<form onSubmit={handleFormSubmit}>
					<TextAreaField
						label=""
						placeholder="type a message..."
						rows={2}
						onChange={(e) => {
							setMessageText(e.target.value)
						}}
						value={messageText}
					/>
					<hr />
					<Flex justifyContent={'flex-end'}>
						<Button
							marginTop={tokens.space.small}
							variation="primary"
							type="submit"
							disabled={!roomId}
						>
							Send
						</Button>
					</Flex>
				</form>
			</View>
		</View>
	)
}
