'use client'

import {
	Authenticator,
	Flex,
	Heading,
	SelectField,
	useTheme,
	View,
	withAuthenticator,
} from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import { InputArea } from './components/InputArea'
import { MessageList } from './components/Message'
import { ConversationBar } from './components/ConversationBar'
import { API } from 'aws-amplify'

import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api'
import { useRouter } from 'next/navigation'

type ConversationPageProps = {
	user: {
		username: string
		attributes: {
			email: string
			sub: string
		}
	}
}

function ConversationPage({ user }: ConversationPageProps) {
	const { tokens } = useTheme()
	const router = useRouter()
	const [messages, setMessages] = useState([])
	const [conversations, setConversations] = useState([])
	const [currentRoom, setCurrentRoom] = useState()

	useEffect(() => {}, [])

	const handleMessageSend = async (newMessage: string) => {}

	const handleRoomChange = (roomID: string) => {}

	const onAddRoom = (room: {}) => {}
	return (
		<>
			<View>
				<Flex direction={{ base: 'column', medium: 'row' }}>
					<ConversationBar
						rooms={conversations}
						onRoomChange={handleRoomChange}
						handleAddRoom={onAddRoom}
					/>
					<View flex={{ base: 0, medium: 1 }}>
						<View margin="0 auto" width={{ base: '95vw', medium: '70vw' }}>
							<Flex
								direction={{ base: 'column', medium: 'row' }}
								justifyContent={'space-between'}
								alignItems={'center'}
								style={{ borderBottom: '1px solid black' }}
								paddingBottom={tokens.space.small}
							>
								<Heading
									padding={tokens.space.small}
									level={1}
									color={tokens.colors.blue[60]}
								>
									{currentRoom?.name ?? 'Select a conversation'}
								</Heading>
								<View />
							</Flex>

							<Flex direction="column" height="85vh">
								<MessageList messages={messages} myUsername={user.username} />
								<InputArea
									onMessageSend={handleMessageSend}
									roomId={currentRoom?.id}
								/>
							</Flex>
						</View>
					</View>
				</Flex>
			</View>
		</>
	)
}

const formFields = {
	signIn: {
		username: {
			placeholder: 'Enter Your Email Here',
			isRequired: true,
			label: 'Email',
		},
	},
	signUp: {
		username: {
			placeholder: 'Enter Your Email Here',
			isRequired: true,
			label: 'Email',
		},
	},
}
export default withAuthenticator(ConversationPage, {
	formFields,
	components: {
		SignUp: {
			FormFields() {
				return (
					<>
						<Authenticator.SignUp.FormFields />

						{/* Append & require Terms & Conditions field to sign up  */}
						<SelectField
							required
							label="Select Your Preferred Language"
							name="custom:preferred_lang"
						>
							<option value="en">English</option>
							<option value="es">Spanish</option>
						</SelectField>
					</>
				)
			},
		},
	},
})
// export default ConversationPage
