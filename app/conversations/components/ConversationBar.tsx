import { Flex, Menu, useBreakpointValue } from '@aws-amplify/ui-react'
import { useState } from 'react'
import { RoomList } from './RoomList'
import { Conversation } from '@/_cdk-backend/lib/api/graphql/API'

type ConversationBarProps = {
	rooms: [] | Conversation[]
	onRoomChange: (roomId: string) => void
	handleAddRoom: (room: string) => void
}
export const ConversationBar = ({
	rooms,
	onRoomChange,
	handleAddRoom,
}: ConversationBarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const variation = useBreakpointValue({
		base: 'isMobile',
		medium: 'isTabletOrHigher',
	})

	const toggleMenu = (roomId: string) => {
		setIsMenuOpen(false)
		onRoomChange(roomId)
	}

	if (variation === 'isMobile') {
		return (
			<Flex>
				<Menu
					isOpen={isMenuOpen}
					menuAlign="start"
					onOpenChange={() => {
						setIsMenuOpen(!isMenuOpen)
					}}
				>
					<RoomList
						rooms={rooms}
						handleMenuToggle={toggleMenu}
						handleAddRoom={handleAddRoom}
					/>
				</Menu>
			</Flex>
		)
	} else if (variation === 'isTabletOrHigher') {
		return (
			<>
				<RoomList
					rooms={rooms}
					handleMenuToggle={toggleMenu}
					handleAddRoom={handleAddRoom}
				/>
			</>
		)
	}
}
