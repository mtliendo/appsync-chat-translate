import { Message } from '@/_cdk-backend/lib/api/graphql/src/API'
import {
	Card,
	Flex,
	Heading,
	Text,
	useTheme,
	View,
} from '@aws-amplify/ui-react'

export const MessageItem = ({
	msg,
	myUsername,
}: {
	msg: Message
	myUsername: string
}) => {
	const { tokens } = useTheme()

	const isMyMsg = msg.owner === myUsername

	return (
		<Card
			borderRadius={tokens.radii.small}
			variation="elevated"
			alignSelf={isMyMsg ? 'end' : 'start'}
			width={{ base: '300px', medium: '450px' }}
			backgroundColor={isMyMsg ? '#007aff' : '#DDDDDD'}
		>
			<Flex>
				<View>
					<Flex>
						<Heading level={5} color={isMyMsg ? 'white' : 'black'}>
							{msg.owner}{' '}
							<Text
								color={isMyMsg ? 'white' : 'black'}
								fontSize={'12px'}
								fontWeight="normal"
								marginBottom={tokens.space.small}
							>
								{new Date(msg.createdAt).toLocaleString()}
							</Text>
						</Heading>
					</Flex>

					<TextMessage isMyMsg={isMyMsg} msgContent={msg.prompt} />
				</View>
			</Flex>
		</Card>
	)
}

const TextMessage = ({
	isMyMsg,
	msgContent,
}: {
	isMyMsg: boolean
	msgContent: string
}) => {
	return (
		<Text display={'inline'} color={isMyMsg ? 'white' : 'black'}>
			{msgContent}{' '}
		</Text>
	)
}

type MessageListProps = {
	messages: Message[]
	myUsername: string
}
export const MessageList = ({ messages, myUsername }: MessageListProps) => {
	return (
		<Flex
			flex="1"
			backgroundColor="white"
			style={{ overflowY: 'scroll' }}
			direction="column-reverse"
			padding="5px"
		>
			{messages.map((msg) => (
				<MessageItem key={msg.id} msg={msg} myUsername={myUsername} />
			))}
		</Flex>
	)
}
