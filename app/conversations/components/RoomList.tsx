import { Conversation } from '@/_cdk-backend/lib/api/graphql/API'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TextField,
	View,
} from '@aws-amplify/ui-react'
import { useState } from 'react'

type RoomListProps = {
	rooms: Conversation[] | []
	handleMenuToggle: (id: string) => void
	handleAddRoom: (room: string) => void
}
export const RoomList = ({
	handleMenuToggle,
	rooms,
	handleAddRoom,
}: RoomListProps) => {
	const [roomName, setRoomName] = useState('')

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setRoomName('')
		handleAddRoom(roomName)
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
							<TableCell>{room.name}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</View>
	)
}
