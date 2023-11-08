import { AppSyncIdentityCognito, Context } from '@aws-appsync/utils'
import { util } from '@aws-appsync/utils'
import * as ddb from '@aws-appsync/utils/dynamodb'

export function request(ctx: Context) {
	const cognitoIdentity = ctx.identity as AppSyncIdentityCognito
	console.log(ctx.prev.result)
	const item = {
		__typename: 'Message',
		id: util.autoId(),
		owner: cognitoIdentity.sub,
		createdAt: util.time.nowISO8601(),
		updatedAt: util.time.nowISO8601(),
		conversationMessagesId: ctx.arguments.input.conversationMessagesId,
		content: {
			text: ctx.arguments.input.text,
			language: ctx.arguments.input.sourceLanguage,
		},
		translatedContent: {
			text: ctx.prev.result.TranslatedText,
			language: ctx.arguments.input.destinationLanguage,
		},
	}
	const key = { id: item.id }
	return ddb.put({ key, item })
}

export function response(ctx: Context) {
	return ctx.result
}
