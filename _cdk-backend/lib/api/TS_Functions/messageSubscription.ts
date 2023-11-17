import { Context } from '@aws-appsync/utils'

export function request(ctx: Context) {
	console.log('first', ctx.result)
	return {
		payload: null,
	}
}

export function response(ctx: Context) {
	console.log('second', ctx.result)
	const filter = {
		conversationMessagesId: { eq: ctx.args.conversationId },
	}
	extensions.setSubscriptionFilter(util.transform.toSubscriptionFilter(filter))

	return null
}
