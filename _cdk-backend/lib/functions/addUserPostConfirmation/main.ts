import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'

const dynamoDBClient = new DynamoDBClient({})
const docClient = DynamoDBDocumentClient.from(dynamoDBClient)

type PostConfirmationConfirmSignUpTriggerEvent = {
	request: {
		userAttributes: {
			sub: string
			email: string
			['custom:preferred_lang']?: string
		}
	}
	userName: string
}

exports.handler = async (event: PostConfirmationConfirmSignUpTriggerEvent) => {
	const date = new Date()
	const isoDate = date.toISOString()

	const user = event.request.userAttributes

	// Construct the param
	const params = {
		TableName: process.env.UserTableName as string,
		Item: {
			__typename: 'User',
			id: user.sub,
			owner: user.sub,
			createdAt: isoDate,
			updatedAt: isoDate,
			email: user.email,
			preferredLanguage: user['custom:preferred_lang'],
		},
	}

	// Try to add to the DB, otherwise throw an error
	try {
		await docClient.send(new PutCommand(params))
		return event
	} catch (err) {
		console.log(err)
		return event
	}
}
