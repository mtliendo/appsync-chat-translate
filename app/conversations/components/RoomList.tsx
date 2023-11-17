import {
	Conversation,
	CreateConversationMutation,
	CreateConversationMutationVariables,
} from '@/_cdk-backend/lib/api/graphql/API'
import { createConversation } from '@/_cdk-backend/lib/api/graphql/mutations'
import { GraphQLQuery } from '@aws-amplify/api'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	View,
} from '@aws-amplify/ui-react'
import { API } from 'aws-amplify'
import { useState } from 'react'

type RoomListProps = {
	rooms: Conversation[] | []
	handleMenuToggle: (id: string) => void
	handleAddRoom: (room: Conversation) => void
}
export const RoomList = ({
	handleMenuToggle,
	rooms,
	handleAddRoom,
}: RoomListProps) => {
	const [roomName, setRoomName] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const variables: CreateConversationMutationVariables = {
			input: {
				name: roomName,
				participants: [],
			},
		}
		const { data } = await API.graphql<
			GraphQLQuery<CreateConversationMutation>
		>({
			query: createConversation,
			variables,
		})
		if (data?.createConversation) {
			handleAddRoom(data.createConversation)
		}
		setRoomName('')
	}

	return (
		<View>
			<Table variation="striped" highlightOnHover>
				<TableHead>
					<TableRow>
						<TableCell as="th">
							<form onSubmit={handleSubmit}>
								<TextField
									label="New Conversation Name"
									placeholder="product-love"
									onChange={(e) => setRoomName(e.target.value)}
									value={roomName}
								/>
							</form>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell as="th">Available Conversations</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rooms.map((room) => (
						<TableRow
							key={room.id}
							onClick={() => {
								console.log(room.id)
								handleMenuToggle(room.id)
							}}
						>
							<TableCell>{room.title}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</View>
	)
}
