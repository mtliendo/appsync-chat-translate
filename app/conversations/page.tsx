'use client'

import {
	Authenticator,
	Button,
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
import {
	Conversation,
	CreateConversationMutation,
	CreateConversationMutationVariables,
	GetConversationQuery,
	GetUserQuery,
	ListConversationsQuery,
	ListUsersQuery,
	Message,
	OnTranslateMessageSubscription,
	OnTranslateMessageSubscriptionVariables,
	TranslateMessageMutation,
	TranslateMessageMutationVariables,
	User,
} from '@/_cdk-backend/lib/api/graphql/API'
import {
	getConversation,
	getUser,
	listConversations,
	listUsers,
} from '@/_cdk-backend/lib/api/graphql/queries'
import {
	createConversation,
	translateMessage,
} from '@/_cdk-backend/lib/api/graphql/mutations'
import { onTranslateMessage } from '@/_cdk-backend/lib/api/graphql/subscriptions'

type ConversationPageProps = {
	user: {
		username: string
		attributes: {
			email: string
			sub: string
		}
	}
	signOut: () => {}
}

function ConversationPage({ user, signOut }: ConversationPageProps) {
	const { tokens } = useTheme()
	const router = useRouter()
	const [messages, setMessages] = useState<Message[]>([])
	const [conversations, setConversations] = useState<Conversation[]>([])
	const [currentRoom, setCurrentRoom] = useState<Conversation>()
	const [currentUsers, setCurrentUsers] = useState<User[] | []>([])
	const [selectedParticipant, setSelectedParticipant] = useState<User>()
	const [myDetails, setMyDetails] = useState<User>()

	useEffect(() => {
		API.graphql<GraphQLQuery<ListUsersQuery>>({
			query: listUsers,
		}).then((res) => {
			if (res.data?.listUsers) {
				// filter out myself
				const allUsers = res.data.listUsers.items as User[]
				const otherUsers = allUsers.filter((u) => u.id !== user.attributes.sub)
				setCurrentUsers(otherUsers)
			}
		})
	}, [user.attributes.sub])

	useEffect(() => {
		API.graphql<GraphQLQuery<GetUserQuery>>({
			query: getUser,
			variables: {
				id: user.attributes.sub,
			},
		}).then((res) => {
			setMyDetails(res.data?.getUser as User)
		})
	}, [user.attributes.sub])

	useEffect(() => {
		API.graphql<GraphQLQuery<ListConversationsQuery>>({
			query: listConversations,
		}).then((res) => {
			if (res.data?.listConversations) {
				setConversations(res.data.listConversations.items as Conversation[])
			}
		})
	}, [])

	// subscribe for incoming messages with my id
	useEffect(() => {
		const variables: OnTranslateMessageSubscriptionVariables = {
			conversationId: currentRoom?.id as string,
		}
		const sub = API.graphql<
			GraphQLSubscription<OnTranslateMessageSubscription>
		>({
			query: onTranslateMessage,
			variables,
		}).subscribe(({ value }) => {
			console.log(value)
			setMessages(
				(currMsgs) => [value.data?.onTranslateMessage, ...currMsgs] as Message[]
			)
		})

		return () => {
			sub.unsubscribe()
		}
	}, [currentRoom?.id])

	const handleMessageSend = async (newMessage: string) => {
		console.log('hey new messg', newMessage)
		//send a message to the currently selected participant
		const variables: TranslateMessageMutationVariables = {
			input: {
				conversationMessagesId: currentRoom?.id as string,
				text: newMessage,
				sourceLanguage: myDetails?.preferredLanguage!,
				destinationLanguage: selectedParticipant?.preferredLanguage!,
			},
		}

		API.graphql<GraphQLQuery<TranslateMessageMutation>>({
			query: translateMessage,
			variables,
		}).then((res) =>
			console.log('successful message', res.data?.translateMessage)
		)
	}

	const handleRoomChange = (roomID: string) => {
		router.push(`/conversations?${roomID}`)
		API.graphql<GraphQLQuery<GetConversationQuery>>({
			query: getConversation,
			variables: {
				id: roomID,
			},
		}).then((res) => {
			if (res.data?.getConversation) {
				console.log('the congvo', res.data.getConversation)
				setCurrentRoom(res.data.getConversation)
				setMessages(res.data.getConversation.messages?.items as Message[])
			}
		})
	}

	const onAddRoom = (room: string) => {
		//create the room
		const variables: CreateConversationMutationVariables = {
			input: {
				name: room,
				participants: [],
			},
		}
		API.graphql<GraphQLQuery<CreateConversationMutation>>({
			query: createConversation,
			variables,
		}).then((res) => {
			if (res.data?.createConversation) {
				setConversations(
					(currConvos) =>
						[res.data?.createConversation, ...currConvos] as Conversation[]
				)
			}
		})
	}

	const handleSelectedUserChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedUser = currentUsers.find(
			(u) => u.id === e.target.value
		) as User
		setSelectedParticipant(selectedUser)
	}
	return (
		<>
			<View>
				<Flex justifyContent={'flex-end'} margin={tokens.space.small}>
					<Button variation="destructive" onClick={signOut}>
						Sign Out
					</Button>
				</Flex>
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
							<SelectField
								label="select a user"
								labelHidden
								onChange={handleSelectedUserChange}
								placeholder="Select a user"
							>
								{currentUsers.map((u: User) => (
									<option key={u.id} value={u.id}>
										{u.email} - receives in({u.preferredLanguage})
									</option>
								))}
							</SelectField>
							<Flex direction="column" height="75vh">
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
